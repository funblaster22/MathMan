<script lang="ts">
  import {getContext} from "svelte";
  import type {Writable} from "svelte/store";
  import Tool from "$lib/Tool";
  import "./ToolStyle.css"

  // I considered implementing this with checkboxes & radio inputs, but 1) cannot uncheck radio buttons
  // 2) Javascript required anyways 3) it'll be more hassle than it's worth

  export let selectedData: Tool;

  let selection: Writable<Tool> = getContext('selection');
  let isSelected = false;

  $: isSelected = $selection === selectedData;

  function launchTool(ev: MouseEvent) {
    ev.stopPropagation();
    selection.set(isSelected ? Tool.None : selectedData);
  }
</script>

<div class="tool" style:height={isSelected ? "100%" : "30px"} on:click={launchTool}>
    <slot {isSelected} />
</div>
