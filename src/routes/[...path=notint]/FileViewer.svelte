<script lang="ts">
  import {liveQuery, type Observable} from "dexie";
  import {db, type File} from "$lib/db";
  import {page} from "$app/stores";
  import type {Writable} from "svelte/store";
  import FileComponent from "./File.svelte";
  import IconFile from "./IconFile.svelte";
  import Folder from "./Folder.svelte";
  import {strNumSort} from "$lib";

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
    db.files.where({route: $page.params.path}).toArray().then(arr => arr.sort((a, b) => strNumSort(a.name, b.name)))
  );
</script>

<div class="flex flex-wrap justify-evenly gap-3">
    <!-- Use id 0 for unknown since -1 is not recognised by my parser & 0 should never be a key -->
    <IconFile href="0?studyMode=Mistakes" emoji="💯" title="Review Mistakes" />
    <IconFile href="0?studyMode=Questions" emoji="🙋" title="Review Questions" />
    {#each Object.keys(fileSubstruct) as folder}
        <Folder {folder} />
    {/each}
    {#each ($files ?? []) as file (file.id)}
        <FileComponent {file} {deleteEnabled} />
    {/each}
    <!-- Padding to make sure `justify-evenly` places extra items left-aligned -->
    {#each Array(10) as _}
        <div class="w-[6rem] mr-[11px]"></div>
    {/each}
</div>
