// Node's path.resolve doesn't work b/c process.cwd undefined
// Considered Deno functions, but that also is a bit of work https://deno.land/std@0.210.0/path/posix/mod.ts
export function resolve(path: string, base: string = "") {
  // I know it's hideous
  return decodeURIComponent(new URL(path, "http://example.com/" + base + (base ? "/" : "")).pathname.substring(1));
}
