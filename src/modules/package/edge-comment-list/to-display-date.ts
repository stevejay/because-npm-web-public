export default function toDisplayDate(timestampMs: number): string {
  return new Date(timestampMs).toLocaleDateString();
}
