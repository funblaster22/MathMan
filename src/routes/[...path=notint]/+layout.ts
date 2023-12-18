import type { LayoutLoad  } from './$types';

// Using LayoutLoad cascades variables while PageLoad does not implicitly
export const load: LayoutLoad  = ({ params }) => {
  const path = params.path.split("/");
  if (path[0] !== "")
    path.unshift("");
  return {
    path,
  } as App.PageData;
};
