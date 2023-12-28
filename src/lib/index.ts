// place files you want to import through the `$lib` alias in this folder.

export function setSearch(keyVals: Record<string, string>) {
  const searchParams = new URLSearchParams(location.search);
  for (const [name, value] of Object.entries(keyVals))
    searchParams.set(name, value);
  return "?" + searchParams.toString();
}
