// ═══════════════════════════════════════════════════════════════
// TENSE AF — TRANSPORT LAYER
//
// Adapter interface. Multiplayer engine talks to this, not to
// network directly. Swap adapters without touching field logic.
//
// Interface (both adapters implement):
//   adapter.send(signal)       — emit playerSignal to peers
//   adapter.onReceive(fn)      — register handler for incoming signals
//   adapter.connect(roomId)    — join a room
//   adapter.disconnect()       — leave
//   adapter.playerCount        — current N (including self)
//
// Adapters:
//   BroadcastChannelAdapter   — same device, multi-tab, zero server
//                               Development/classroom-on-one-machine use
//   WebSocketAdapter          — stub, ready for a relay server
// ═══════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────
// BROADCAST CHANNEL ADAPTER
// Uses the browser's BroadcastChannel API.
// Works across tabs on the same origin. No server needed.
// Useful for: development, single-device classroom demo.
//
// Limitation: same browser only. Not across physical devices.
// ─────────────────────────────────────────────────────────────
class BroadcastChannelAdapter {
  constructor() {
    this._channel  = null;
    this._handlers = [];
    this._peers    = new Map();   // peerId → lastSeen timestamp
    this.playerId  = _generateId();
    this.playerCount = 1;         // includes self
    this._heartbeatTimer = null;
  }

  // playerCount — for display only.
  // Do NOT use for: signal weighting, timing logic, effect scaling.
  // Peers can drop silently; count is a best-effort estimate.
  connect(roomId) {
    if (this._channel) this.disconnect();
    this._channel = new BroadcastChannel(`tense-af:${roomId}`);
    this._channel.onmessage = (e) => this._onMessage(e.data);
    this._startHeartbeat();
    this._announce();
    console.log(`[transport] BroadcastChannel connected: ${roomId}`);
  }

  disconnect() {
    if (this._heartbeatTimer) clearInterval(this._heartbeatTimer);
    if (this._channel) {
      this._broadcast({ type: 'leave', from: this.playerId });
      this._channel.close();
      this._channel = null;
    }
    this._peers.clear();
    this.playerCount = 1;
  }

  send(signal) {
    const msg = { type: 'signal', from: this.playerId, signal };
    if (typeof DEV_JITTER !== 'undefined' && DEV_JITTER) {
      // Dev-only: simulate real-world network variance (20–120ms jitter)
      // Set DEV_JITTER = true in console to activate. No effect in production.
      setTimeout(() => this._broadcast(msg), 20 + Math.random() * 100);
    } else {
      this._broadcast(msg);
    }
  }

  onReceive(fn) {
    this._handlers.push(fn);
  }

  _broadcast(msg) {
    if (this._channel) this._channel.postMessage(msg);
  }

  _onMessage(msg) {
    if (!msg || msg.from === this.playerId) return;

    if (msg.type === 'join' || msg.type === 'heartbeat') {
      const isNew = !this._peers.has(msg.from);
      this._peers.set(msg.from, Date.now());
      this._pruneStale();
      if (isNew) this._announce(); // respond so they know we exist
    }

    if (msg.type === 'leave') {
      this._peers.delete(msg.from);
      this._pruneStale();
    }

    if (msg.type === 'signal') {
      this._peers.set(msg.from, Date.now());
      this._pruneStale();
      this._handlers.forEach(fn => {
        try { fn(msg.from, msg.signal); } catch(e) {}
      });
    }
  }

  _announce() {
    this._broadcast({ type: 'join', from: this.playerId });
  }

  _startHeartbeat() {
    // 3s heartbeat — peers prune after 8s silence
    this._heartbeatTimer = setInterval(() => {
      this._broadcast({ type: 'heartbeat', from: this.playerId });
      this._pruneStale();
    }, 3000);
  }

  _pruneStale() {
    const cutoff = Date.now() - 8000;
    for (const [id, ts] of this._peers) {
      if (ts < cutoff) this._peers.delete(id);
    }
    this.playerCount = this._peers.size + 1;  // +1 = self
  }
}

// ─────────────────────────────────────────────────────────────
// WEBSOCKET ADAPTER — stub
// Connects to a relay server that echoes signals to room peers.
// Minimal relay server: any WebSocket broadcast server works.
// (Node: ws library, ~20 lines. Cloudflare Worker. Fly.io. etc.)
//
// Message format over wire: JSON with same structure as
// BroadcastChannelAdapter messages. Drop-in compatible.
// ─────────────────────────────────────────────────────────────
class WebSocketAdapter {
  constructor(serverUrl) {
    this._url      = serverUrl;
    this._ws       = null;
    this._handlers = [];
    this._peers    = new Set();
    this.playerId  = _generateId();
    this.playerCount = 1;
    this._reconnectTimer = null;
    this._roomId   = null;
  }

  // playerCount — display only. Not authoritative.
  // Server may lag; peers may drop without clean leave message.
  connect(roomId) {
    this._roomId = roomId;
    this._open();
  }

  _open() {
    if (!this._url) {
      console.warn('[transport] WebSocketAdapter: no server URL provided');
      return;
    }
    try {
      this._ws = new WebSocket(`${this._url}?room=${this._roomId}&player=${this.playerId}`);
      this._ws.onmessage = (e) => {
        try { this._onMessage(JSON.parse(e.data)); } catch(_) {}
      };
      this._ws.onclose = () => {
        // Reconnect after 2s
        this._reconnectTimer = setTimeout(() => this._open(), 2000);
      };
      this._ws.onerror = () => this._ws.close();
    } catch(e) {
      console.error('[transport] WebSocket error:', e);
    }
  }

  disconnect() {
    if (this._reconnectTimer) clearTimeout(this._reconnectTimer);
    if (this._ws) { this._ws.onclose = null; this._ws.close(); this._ws = null; }
    this._peers.clear();
    this.playerCount = 1;
  }

  send(signal) {
    if (!this._ws || this._ws.readyState !== WebSocket.OPEN) return;
    this._ws.send(JSON.stringify({ type: 'signal', from: this.playerId, signal }));
  }

  onReceive(fn) {
    this._handlers.push(fn);
  }

  _onMessage(msg) {
    if (!msg || msg.from === this.playerId) return;
    if (msg.type === 'join')   { this._peers.add(msg.from);    this.playerCount = this._peers.size + 1; }
    if (msg.type === 'leave')  { this._peers.delete(msg.from); this.playerCount = this._peers.size + 1; }
    if (msg.type === 'signal') {
      this._peers.add(msg.from);
      this.playerCount = this._peers.size + 1;
      this._handlers.forEach(fn => {
        try { fn(msg.from, msg.signal); } catch(e) {}
      });
    }
    if (msg.type === 'peers') {
      // Server may send initial peer count
      this.playerCount = (msg.count || 0) + 1;
    }
  }
}

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────
function _generateId() {
  return Math.random().toString(36).slice(2, 9);
}

if (typeof window !== 'undefined') {
  window.BroadcastChannelAdapter = BroadcastChannelAdapter;
  window.WebSocketAdapter        = WebSocketAdapter;
}
