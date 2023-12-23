<script lang="ts">
  import {liveQuery, type Observable} from "dexie";
  import {db, type File} from "$lib/db";
  import {page} from "$app/stores";
  import path from "path";
  import {base} from "$app/paths";
  import type {Writable} from "svelte/store";
  import FileComponent from "./File.svelte";

  export let fileStruct: FileStructure;
  export let deleteEnabled: Writable<boolean>;

  let fileSubstruct: FileStructure = {};

  $: {
    fileSubstruct = fileStruct;
    for (const folder of $page.data.path) {
      fileSubstruct = fileSubstruct[folder];
      if (fileSubstruct == undefined) {
        fileSubstruct = {};
        break;
      }
    }
  }

  let files: Observable<File[]>;
  $: files = liveQuery(() =>
    db.files.where({route: $page.params.path}).toArray()
  );
</script>

<div class="flex flex-wrap justify-evenly gap-3">
    {#each Object.keys(fileSubstruct) as folder}
        <a href={path.join("/", base, $page.params.path, folder)} class="text-center w-[6rem]">
            <div class="text-7xl aspect-square perfect-center font-mono">📁</div>
            {folder}
        </a>
    {/each}
    {#each ($files ?? []) as file (file.id)}
        <FileComponent {file} {deleteEnabled} />
    {/each}
    <!-- Padding to make sure `justify-evenly` places extra items left-aligned -->
    {#each Array(10) as _}
        <div class="w-[6rem] mr-[11px]"></div>
    {/each}
</div>
