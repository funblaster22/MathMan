// place files you want to import through the `$lib` alias in this folder.

import {goto} from "$app/navigation";

export function setSearch(name: string, value: string) {
  const searchParams = new URLSearchParams(location.search);
  searchParams.set(name, value);
  return goto("?" + searchParams.toString())
}
