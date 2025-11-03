import { getEnv } from '../utils/env';

// PUBLIC_INTERFACE
export function getMapsProvider() {
  return getEnv('REACT_APP_MAPS_PROVIDER') || 'placeholder';
}
