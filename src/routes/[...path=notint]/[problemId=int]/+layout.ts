import type { LayoutLoad  } from './$types';

export const load: LayoutLoad = ({ params }) => {
  return {
    problemId: Number.parseInt(params.problemId),
  } as App.PageData;
};
