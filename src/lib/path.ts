import path from "path";
import {base} from "$app/paths";
import type {Page} from "@sveltejs/kit";

export {join} from "path";

/** Start with `/<base>`, join all arguments together, and normalize the resulting path. */
export function absJoin(...paths: string[]) {
  return path.join("/", base, ...paths);
}

// Node's path.resolve doesn't work b/c process.cwd undefined
// Considered Deno functions, but that also is a bit of work https://deno.land/std@0.210.0/path/posix/mod.ts
export function resolve(path: string, base: string = "") {
  // I know it's hideous
  return decodeURIComponent(new URL(path, "http://example.com/" + base + (base ? "/" : "")).pathname.substring(1));
}

/**
 * Generate a relative url that when followed leads to . Solid-like signals would be nice here
 * @example location.href = "/BASE/foo/bar". folder = "baz". Returns "bar/baz"
 */
export function extendCwd($page: Page, folder: string) {
  return path.join($page.data.path.at(-1) || base, folder)
}

/**
 * Reactively compute a relative url that directs to the location without the last slash element
 * @example location.href = "/BASE/foo/bar". Returns "../foo", which resolves to "/BASE/foo"
 */
export function upCwd($page: Page) {
  return path.join("..", $page.url.pathname.split("/").at(-2) || base);
}
