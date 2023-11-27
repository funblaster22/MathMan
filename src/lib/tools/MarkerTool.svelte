<script lang="ts">
  import {getContext} from "svelte";
  import type {Writable} from "svelte/store";
  import Tool from "$lib/Tool";
  import "./ToolStyle.css"
  import markerUrl from "$lib/img/marker.png"

  // I considered implementing this with checkboxes & radio inputs, but 1) cannot uncheck radio buttons
  // 2) Javascript required anyways 3) it'll be more hassle than it's worth

  // Which tool will be invoked
  export let tool: Tool;
  // CSS image filter property
  export let filter = "";
  // Displayed on hover
  export let title: string;

  let selection: Writable<Tool> = getContext('selection');
  let isSelected = false;

  $: isSelected = $selection === tool;
</script>

<div class="tool" style:height={isSelected ? "100%" : "30px"} on:pointerdown|stopPropagation={() => selection.set(isSelected ? Tool.None : tool)}>
    <img style="filter:{filter}" src={markerUrl} {title} draggable="false" />
</div>
