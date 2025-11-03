export function getEnv(key) {
  /** PUBLIC_INTERFACE
   * Read env vars injected by CRA (REACT_APP_*).
   * Note: Values are string-only, undefined resolved to empty string.
   */
  return process.env[key];
}
