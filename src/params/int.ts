import type {ParamMatcher} from "@sveltejs/kit";
import isInt from "$lib/isInt";

export const match: ParamMatcher = (param) => {
  return isInt(param);
}
