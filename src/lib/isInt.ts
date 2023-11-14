export default function isInt(s: string) {
  // Number.isInteger(Number.parseInt(s)); works too but *slightly* slower in benchmarks.
  // Might also classify " 5" as integer, which technically isn't correct
  return /^\d+$/.test(s);
}
