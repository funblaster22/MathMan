<script lang="ts">
  import { base } from "$app/paths";
  import path from "path"
  import {page} from "$app/stores";

  export let fileStruct: FileStructure;
  export let indentLevel = 0;
  export let fullPath = "";
</script>

{#each Object.keys(fileStruct ?? {}) as subStruct}
    {@const myFullPath = path.join(fullPath, subStruct)}
    <a class:font-bold={myFullPath === ($page.params.path || ".")}
       href={path.join("/", base, myFullPath)} style:padding-left={indentLevel * 15 + "px"}
       class="w-full block text-left font-bold">{subStruct || "/"}</a>
    <svelte:self fileStruct={fileStruct[subStruct]} indentLevel={indentLevel + 1} fullPath={myFullPath} />
{/each}
