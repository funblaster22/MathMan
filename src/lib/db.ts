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
  work: ImageData,
  error: ImageData,
  questions: ImageData,
  rois: Roi[],
}

export interface File {
  // Autoincrementing primary key
  id?: number;
  // Useful for rendering file view. MUST NOT be null b/c indexeddb can't query it then
  parent: string;
  // Full folder path to file. Useful for querying all recursive folder contents. Example: ["", mat, 10.8, homework]
  // Gaurenteed to have at least 2 items (root "" and the filename)
  route: string[];
  // Not indexed. Only exists for files, not folders
  attempts?: Attempt[],
}

export class MyDexie extends Dexie {
  // 'files' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  files!: Table<File>;

  constructor() {
    super('localDatabase');
    // Docs: https://dexie.org/docs/Version/Version.stores()#schema-syntax
    this.version(1).stores({
      files: '++id, parent, *route' // Primary key and indexed props
    });
  }
}

export const db = new MyDexie();
