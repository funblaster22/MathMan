import type { LayoutLoad  } from './$types';

export const load: LayoutLoad = ({ params, url }) => {
  return {
    problemId: Number.parseInt(params.problemId),
    attemptIdx: Math.max(0, Number.parseInt(url.searchParams.get('attempt') ?? "1") - 1),
  } as App.PageData;
};
