<script lang="ts">
  import {onMount} from "svelte";
  import {db} from "$lib/db";
  import newBlankAttempt from "$lib/newBlankAttempt";
  import FileSidebar from "./FileSidebar.svelte";
  import FileViewer from "./FileViewer.svelte";

  let fileStruct: FileStructure = {};

  async function makeFileStruct() {
    const fileStruct: FileStructure = {}
    const paths = await db.files.orderBy('[route]').uniqueKeys().then(routes => routes.flat(1)) as string[][];

    for (const path of paths) {
      let workingDir = fileStruct;
      for (const folder of path) {
        if (!(folder in workingDir))
          workingDir[folder] = {};
        workingDir = workingDir[folder];
      }
    }

    return fileStruct;
  }

  function newFile (...route: string[]) {
    if (route.length === 0) {
      const input = prompt("Enter path of file to create")?.split("/");
      if (input == undefined)
        return
      if (route.length === 0)
        throw "Need at least filename";
    }
    db.files.add({
      attempts: [newBlankAttempt()],
      parent: route.at(-2) ?? "",
      route: ["", ...route.slice(0, route.length - 1)],
      name: route.at(-1) as string,
      questions: 0,
      mistakes: 0,
    });
  }

  onMount(() => {
    makeFileStruct().then(struct => fileStruct = struct);
  });
</script>

<svelte:head>
    <title>MathMan Browse</title>
</svelte:head>

<div id="grid">
    <div id="ribbon" class="text-right">
        <button on:click={() => newFile()}>➕ file</button>
    </div>
    <div id="folders"><FileSidebar {fileStruct} /></div>
    <div id="files"><FileViewer /></div>
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
