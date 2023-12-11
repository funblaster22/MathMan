import Dexie, { type Table } from 'dexie';

/*
files {
    name:
    parent:  // Useful for rendering file view. TODO: if possible to use `route` to only show direct descendants, omit this (doubtful)
    route: [mat, 10.8, homework]  // Useful for querying all recursive folder contents

    //
    attempts?: [
        {
            date: Date
            work: img blob
            error: img blob
            rois: [
                {
                    x: int
                    y: int
                    type: (enum) question, solution
                }
            ]
        }
    ]
}
*/

// Adapted from https://dexie.org/docs/Tutorial/Svelte

export enum RoiType {
  question,
  answer,
}

export interface Roi {
  x: number,
  y: number,
  type: RoiType,
}

export interface Attempt {
  date: Date,
  // Minutes that this attempt took
  duration: number,
  work: ImageData,
  error: ImageData,
  questions: ImageData,
  rois: Roi[],
}

export interface File {
  // Autoincrementing primary key
  id?: number;
  // Useful for rendering file view. MUST NOT be null b/c indexeddb can't query it then TODO: remove this & query full route instead (might have issue if 2 folders have same name)
  parent: string;
  // Full folder path to file. Useful for querying all recursive folder contents. Example: ["", mat, 10.8]
  // Gaunted to have at least 1 item (root "")
  route: string[];
  // Not indexed. Only exists for files, not folders
  attempts: Attempt[],
  // Image of the problem being solved (copied across all attempts)
  question?: ImageData,
  // Filename (ex: "problem 1")
  name: string,
  // Count mistakes. TODO: In future, this may be encoded by # of question ROI/chunk
  mistakes: number,
  // Count questions
  questions: number,
}

export class MyDexie extends Dexie {
  // 'files' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  files!: Table<File>;

  constructor() {
    super('localDatabase');
    // Docs: https://dexie.org/docs/Version/Version.stores()#schema-syntax
    this.version(15).stores({
      // Primary key and indexed props
      // [route] creates a multikey, but I'm using it as an alias for route (hacky, need to flatten(1))
      // Useful for constructing the file tree
      // TODO: maybe contribute upstream easier way to alias. See https://github.com/dexie/Dexie.js/blob/master/src/classes/version/schema-helpers.ts#L388
      files: '++id, parent, *route, [route]',
    });
  }

  // TODO: refactor so newAttempt & newFile live here
}

export const db = new MyDexie();
