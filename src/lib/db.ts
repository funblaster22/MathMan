import Dexie, {type Table} from 'dexie';
import * as path from "$lib/path";
import isInt from "$lib/isInt";

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
  // Date of last edit
  date: Date,
  // Minutes that this attempt took
  duration: number,
  work: ImageData,
  error: ImageData,
  questions: ImageData,
  rois: Roi[],
  // Count mistakes. TODO: In future, this may be encoded by # of question ROI/chunk
  mistakeCount: number,
  // Count questions
  questionCount: number,
}

export interface File {
  // Autoincrementing primary key
  id?: number;
  // Full folder path to file. Useful for querying all recursive folder contents. Example: `/mat/10.8`
  // . When `split("/")`, first element should be ""
  route: string;
  // Not indexed. Only exists for files, not folders
  attempts: Attempt[],
  // Image of the problem being solved (copied across all attempts)
  question?: ImageData,
  // Filename (ex: "problem 1")
  name: string,
  flagged: boolean,
}

export interface FileSlim extends Pick<File, "id" | "name" | "route"> {
  attempts: {
    questions: number,
    mistakes: number
  }[]
}

// Adapted from https://dexie.org/docs/Tutorial/Svelte
export class Db extends Dexie {
  // 'files' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  files!: Table<File>;

  constructor() {
    super('MathMan');
    // Docs: https://dexie.org/docs/Version/Version.stores()#schema-syntax
    this.version(33).stores({
      files: '++id, route',
    });
  }

  /** Add new file to database with blank attempt and defaults.
   * @param basePath defaults to root path
   * @param route if not provided, prompt the user
   * @returns Promise resolving to id of newly inserted row. If canceled, will resolve to -1
   */
  async newFile({basePath = "", route = ""}: {basePath?: string, route?: string} = {}): Promise<number> {
    if (route.length === 0) {
      const input = prompt("Enter path of file to create");
      if (input == null)
        return -1;
      if (input === "") {
        alert("Need at least filename");
        return -1;
      }
      route = input;
    }
    const routeArr = path.resolve(route, basePath).split("/");
    const name = routeArr.pop() as string;
    if (routeArr.some(folder => isInt(folder))) {
      alert("Folder cannot be only a number, might confuse with file.");
      return -1;
    }
    return db.files.add({
      attempts: [Db.newBlankAttempt()],
      name,
      route: routeArr.join("/"),
      flagged: false,
    });
  }

  /** Construct an object representing a blank attempt, but don't add it to the database */
  static newBlankAttempt() {
    // @ts-ignore always call from browser
    const blank = document.createElement("canvas").getContext("2d").getImageData(0, 0, 1, 1);
    return {
      date: new Date(),
      work: blank,
      error: blank,
      questions: blank,
      rois: [],
      duration: 0,
      mistakeCount: 0,
      questionCount: 0,
    } satisfies Attempt;
  }
}

export const db = new Db();
