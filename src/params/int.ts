import type {ParamMatcher} from "@sveltejs/kit";
import isInt from "$lib/isInt";

// I'd really appreciate if Sveltekit had a function to transform params so I don't forget to Number.parseInt
export const match: ParamMatcher = (param) => {
  return isInt(param);
}
