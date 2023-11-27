<script lang="ts">
  import PopupTool from "$lib/tools/PopupTool.svelte";
  import Tool from "$lib/Tool";
  import type {Writable} from "svelte/store";
  import {getContext} from "svelte";

  const selectedData = Tool.Select;

  let isSelected = false;
  let isDrawing = false;

  // Store user input
  let anchor: [number, number] = [];  // Usually top left
  let workingEdge: [number, number] = [];  // Usually bottom right

  // Computed values for displaying bounding box
  let topLeftCorner;
  let bottomRightCorner;

  let selection: Writable<Tool> = getContext('selection');

  $: isSelected = $selection === selectedData;

  $: {
    topLeftCorner = [Math.min(anchor[0], workingEdge[0]), Math.min(anchor[1], workingEdge[1])];
    bottomRightCorner = [Math.max(anchor[0], workingEdge[0]), Math.max(anchor[1], workingEdge[1])];
  }

  window.addEventListener("pointerdown", (ev: MouseEvent) => {
    if (isSelected) {
      isDrawing = true;
      anchor = workingEdge = [ev.x, ev.y];
    }
  });
  window.addEventListener("pointermove", (ev: MouseEvent) => {
    if (isDrawing)
      workingEdge = [ev.x, ev.y];
  });
  window.addEventListener("pointerup", () => {
    isDrawing = false;
    // Not sure if closing tool or allowing repeats onpointerup is best UX
    //selection.set(Tool.None);
    // TODO: save to db
  });
</script>

{#if topLeftCorner[1]}
    <button class="border text-center" style="position: fixed"
         style:left={topLeftCorner[0] + "px"}
         style:top={topLeftCorner[1] + "px"}
         style:width={bottomRightCorner[0] - topLeftCorner[0] + "px"}
         style:height={bottomRightCorner[1] - topLeftCorner[1] + "px"}
    >
        Show Solution
    </button>
{/if}
<!-- A little upset about duplicating PopupTool, but it was _just_ different enough to warrent. -->
<div class="tool" style:height={isSelected ? "100%" : "30px"} on:pointerdown|stopPropagation={() => selection.set(isSelected ? Tool.None : selectedData)}>
    <div style="background-color: green">✅</div>
</div>
