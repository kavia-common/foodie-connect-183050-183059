import { io } from 'socket.io-client';
import { getEnv } from '../utils/env';

let socket;

// PUBLIC_INTERFACE
export function getSocket() {
  /** Returns socket instance if available; falls back to null when disabled or mocks. */
  const ENABLE_MOCKS = (getEnv('REACT_APP_ENABLE_MOCKS') || 'false') === 'true';
  if (ENABLE_MOCKS) return null;
  if (socket) return socket;
  const url = getEnv('REACT_APP_WS_URL') || undefined;
  const path = getEnv('REACT_APP_WS_PATH') || '/socket.io';
  socket = io(url, { path, transports:['websocket'] });
  return socket;
}

// PUBLIC_INTERFACE
export function subscribe(event, cb) {
  const s = getSocket();
  if (!s) return () => {};
  s.on(event, cb);
  return () => s.off(event, cb);
}
