import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  return {
    problemId: Number.parseInt(params.problemId),
  } as App.PageData;
};
