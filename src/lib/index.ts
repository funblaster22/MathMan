// place files you want to import through the `$lib` alias in this folder.

/**
 * Copy current location's query parameters, modify them, and return modified copy
 */
export function setSearch(keyVals: Record<string, string>) {
  const searchParams = new URLSearchParams(location.search);
  for (const [name, value] of Object.entries(keyVals))
    searchParams.set(name, value);
  return "?" + searchParams.toString();
}

/**
 * Function for sorting strings. Sorts alphabetically, except if can be number. Strings will be sorted before numbers
 * @param a left comparison
 * @param b right comparison
 */
export function strNumSort(a: string, b: string) {
  const aFloat = Number.parseFloat(a);
  const bFloat = Number.parseFloat(b);
  if (isNaN(aFloat) && !isNaN(bFloat))
    return -1;
  if (isNaN(bFloat) && !isNaN(aFloat))
    return 1;
  const abFloatDiff = aFloat - bFloat;
  if (!isNaN(abFloatDiff))
    return abFloatDiff;
  return a.localeCompare(b);
}
