import Dexie, {type DBCoreIndex, type Table} from 'dexie';

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
  flagged: boolean,
}

// Adapted from https://dexie.org/docs/Tutorial/Svelte
export class MyDexie extends Dexie {
  // 'files' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  files!: Table<File>;

  constructor() {
    super('localDatabase');
    // Docs: https://dexie.org/docs/Version/Version.stores()#schema-syntax
    this.version(31).stores({
      // TODO: maybe contribute upstream easier way to alias. See https://github.com/dexie/Dexie.js/blob/master/src/classes/version/schema-helpers.ts#L388
      // Change modern/dexie.mjs to
      // const [name, alias] = index.replace(/([&*]|\+\+)/g, "").split(/ +as +/);
      // return createIndexSpec(alias || name, ...
      files: '++id, parent, *route as r, route as fullRoute',
    }).upgrade(trans => {
      console.log(trans);
      // This is the best way I could find to alias an index. Ignore Dexie complaints
      // Previously used `[route]` multikey, but return shape inconsistent between safari & chrome (need to `flatten(1)` on Chrome)
      // `*route` is used
      // (trans.idbtrans as IDBTransaction).objectStore("files").createIndex("fullRoute", "route");
    });

    // Docs: https://dexie.org/docs/Dexie/Dexie.use()
    this.use({
      stack: "dbcore", // The only stack supported so far.
      name: "UndoVirtualIndexMiddleware", // Optional name of your middleware
      create (downlevelDatabase) {
        // Return your own implementation of DBCore:
        return {
          // Copy default implementation.
          ...downlevelDatabase,
          table (tableName) {
            // Call default table method
            const downlevelTable = downlevelDatabase.table(tableName);
            const indexByKeyName: Record<string, DBCoreIndex> = {};
            downlevelTable.schema.indexes.forEach(index => indexByKeyName[index.name!] = index);
            // Derive your own table from it:
            return {
              ...downlevelTable,
              schema: {
                ...downlevelTable.schema,
                getIndexByKeyPath(keyPath: null | string | string[]) {
                  // Default implementation: indexByKeyPath[getKeyPathAlias(keyPath)] https://github.com/dexie/Dexie.js/tree/master/src/dbcore/dbcore-indexeddb.ts#L82
                  if (typeof keyPath !== "string")
                    throw "Non-string keyPath not supported"
                  return indexByKeyName[keyPath];
                },
              },
            }
          },
        };
      }
    });
  }

  /** Add new file to database with blank attempt and defaults.
   * @param basePath defaults to root path
   * @param route if not provided, prompt the user
   * @returns Promise resolving to id of newly inserted row. If canceled, will resolve to -1
   */
  async newFile({basePath = [""], route = []}: {basePath?: string[], route?: string[]} = {}): Promise<number> {
    if (route.length === 0) {
      const input = prompt("Enter path of file to create")?.split("/");
      if (input == undefined)
        return -1;
      if (input[0] === "") {
        alert("Need at least filename");
        return -1;
      }
      route = input;
    }
    route.unshift(...basePath);
    return db.files.add({
      attempts: [this.newBlankAttempt()],
      parent: route.at(-2) ?? "",
      route: route.slice(0, route.length - 1),
      name: route.at(-1) as string,
      flagged: false,
    });
  }

  /** Construct an object representing a blank attempt, but don't add it to the database */
  newBlankAttempt() {
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

export const db = new MyDexie();
