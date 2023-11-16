<script lang="ts">
  import { base } from "$app/paths";
  import path from "path"

  export let fileStruct: {};
  export let indentLevel = 0;
  export let fullPath = "";
</script>

{#each Object.keys(fileStruct ?? {}) as subStruct}
    <!-- substr(1) removes duplicate // caused by "" route -->
    <a href={path.join("/", base, fullPath, subStruct)} style:padding-left={indentLevel * 15 + "px"} class="w-full block text-left">{subStruct || "/"}</a>
    <svelte:self fileStruct={fileStruct[subStruct]} indentLevel={indentLevel + 1} fullPath={path.join(fullPath, subStruct)} />
{/each}
