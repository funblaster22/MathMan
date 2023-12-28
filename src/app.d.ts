// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// All pages don't have both properties, but I'm not marking optional b/c it'll require verbose type assertions
		interface PageData {
			/** Consistent fully qualified path (always includes leading ""). Derived from `params.path` */
			path: string[],
			/** Parsed integer `params.problemId` */
			problemId: number,
			/** Parsed, 0-indexed integer, search parameter `attempt`. Defaults to 0 */
			attemptIdx: number,
		}
		// interface Platform {}
	}
	type FileStructure = { [p: string]: FileStructure };
}

export {};
