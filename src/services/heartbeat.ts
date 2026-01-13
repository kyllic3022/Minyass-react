export async function sendHeartbeat(toToken: string) {
  return {
    ok: false,
    error: 'Heartbeat sending requires a server key or Cloud Function.',
    toToken,
  };
}
