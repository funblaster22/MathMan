import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const path = params.path.split("/");
  if (path[0] !== "")
    path.unshift("");
  return {
    path,
  } as App.PageData;
};
