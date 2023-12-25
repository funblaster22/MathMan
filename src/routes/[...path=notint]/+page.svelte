<script lang="ts">
  import {db} from "$lib/db";
  import FileSidebar from "./FileSidebar.svelte";
  import FileViewer from "./FileViewer.svelte";
  import {page} from "$app/stores";
  import {writable} from "svelte/store";
  import {liveQuery} from "dexie";
  import * as path from "$lib/path";
  import {base} from "$app/paths";
  import {setContext} from "svelte";

  let fileStruct: FileStructure = {};
  const deleteEnabled = writable(false);
  const renameEnabled = writable(false);
  setContext("renameEnabled", renameEnabled);
  const paths = liveQuery(() =>
    db.files.orderBy('route').uniqueKeys() as Promise<string[] | undefined>
  );

  function makeFileStruct(paths: string[]) {
    const fileStruct: FileStructure = {"": {}};

    for (const path of paths) {
      let workingDir = fileStruct[""];
      for (const folder of path.split("/")) {
        if (folder.length === 0) break;  // Top-level files can add another root folder, so ignore them
        if (!(folder in workingDir))
          workingDir[folder] = {};
        workingDir = workingDir[folder];
      }
    }

    return fileStruct;
  }

  $: fileStruct = makeFileStruct($paths ?? []);
</script>

<svelte:head>
    <title>MathMan Browse</title>
</svelte:head>

<div id="grid">
    <div id="ribbon" class="text-right">
        <a href={path.upCwd($page)}>🆙📁</a>
        <button on:click={() => $renameEnabled = !$renameEnabled}>✏️ rename</button>
        <button on:click={() => $deleteEnabled = !$deleteEnabled}>🗑️ file</button>
        <button on:click={() => db.newFile({basePath: $page.params.path})}>➕ file</button>
    </div>
    <div id="folders"><FileSidebar {fileStruct} /></div>
    <div id="files"><FileViewer {fileStruct} {deleteEnabled} /></div>
</div>

<style>
    #grid {
        height: 100vh;
        width: 100vw;
        max-width: 100vw !important;
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-template-rows: 2em auto;
    }

    #ribbon { grid-area: 1 / 2 / 2 / 3; }

    #folders { grid-area: 1 / 1 / 3 / 2; }

    #files { grid-area: 2 / 2 / 3 / 3; }

</style>
