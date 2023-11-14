import type {ParamMatcher} from "@sveltejs/kit";
import isInt from "$lib/isInt";

export const match: ParamMatcher = (param) => {
  // at(-1) must always find something
  return !isInt(param.split("/").at(-1) as string);
}
