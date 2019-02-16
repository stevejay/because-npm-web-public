export default function formatTimestamp(timestampMs: number): string {
  return new Date(timestampMs).toLocaleDateString();
}
