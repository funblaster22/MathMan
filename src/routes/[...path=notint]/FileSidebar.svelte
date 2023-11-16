<script lang="ts">
  export let fileStruct: {};
  export let indentLevel = 0;
</script>

{#each Object.keys(fileStruct ?? {}) as subStruct}
    <button style:padding-left={indentLevel * 15 + "px"} class="w-full block text-left">{subStruct || "/"}</button>
    <svelte:self fileStruct={fileStruct[subStruct]} indentLevel={indentLevel + 1} />
{/each}
