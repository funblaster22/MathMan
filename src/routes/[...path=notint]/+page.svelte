<script lang="ts">
  import { page } from '$app/stores'
  import {onMount} from "svelte";
  import {db} from "$lib/db";
  import newBlankAttempt from "$lib/newBlankAttempt";

  let fileStruct = {};

  async function makeFileStruct() {
    const fileStruct = {}
    const paths = await db.files.orderBy('[route]').uniqueKeys().then(routes => routes.flat(1));

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

  function newFile (...route) {
    if (route.length < 1) {
      console.error("Need at least filename")
      return;
    }
    db.files.add({
      attempts: [newBlankAttempt()],
      parent: route.at(-2) ?? "",
      route: ["", ...route.slice(0, route.length - 1)],
      name: route.at(-1),
    });
  }

  onMount(() => {
    // TODO: remove
    window.newFile = newFile;

    makeFileStruct().then(struct => fileStruct = struct);
  });
</script>

<div>You've reached dir!</div>
