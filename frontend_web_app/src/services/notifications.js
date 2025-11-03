import { getEnv } from '../utils/env';

// PUBLIC_INTERFACE
export async function requestPushPermission() {
  const enabled = (getEnv('REACT_APP_PUSH_ENABLED') || 'false') === 'true';
  if (!enabled || !('Notification' in window)) return false;
  const res = await Notification.requestPermission();
  return res === 'granted';
}
