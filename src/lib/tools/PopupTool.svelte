<script lang="ts">
  import {getContext} from "svelte";
  import type {Writable} from "svelte/store";
  import Tool from "$lib/Tool";

  export let selectedData: Tool;

  let selection: Writable<Tool> = getContext('selection');
  let isSelected = false;

  $: isSelected = $selection === selectedData;

  function launchTool(ev: MouseEvent) {
    ev.stopPropagation();
    selection.set(isSelected ? Tool.None : selectedData);
  }
</script>

<div style:height={isSelected ? "100%" : "30px"} on:click={launchTool}>
    <slot {isSelected} />
</div>

<style>
    div {
        width: 30px;  /* TODO: make this dynamic when on iPad vs computer */
        height: 30px;  /* Height when inactive */
        max-width: 200px;
        overflow: hidden;
    }
</style>
