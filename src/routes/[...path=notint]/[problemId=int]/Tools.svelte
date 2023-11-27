<script lang="ts">
    import Tool from "$lib/Tool";
    import type {Writable} from "svelte/store";
    import eraserUrl from "$lib/img/eraser.png"
    import path from "path";
    import {base} from "$app/paths";
    import {page} from "$app/stores";
    import SelectorTool from "$lib/tools/SelectorTool.svelte";
    import MarkerTool from "$lib/tools/MarkerTool.svelte";
    import {getContext, setContext} from "svelte";
    import "$lib/tools/ToolStyle.css"

    export let selected: Writable<Tool>;
    setContext('selection', selected);

    let eraserSelected = getContext<Writable<boolean>>("eraserEnabled");

    function toggleEraser(ev: MouseEvent) {
      eraserSelected.set(!$eraserSelected);
    }
</script>

<div id="tools">
    <SelectorTool />
    <a href={path.join("/", base, "camera", $page.params.problemId)}>
        📷
    </a>
    <MarkerTool tool={Tool.Draw} filter="grayscale(1)" title="Your work" />
    <MarkerTool tool={Tool.Correct} filter="hue-rotate(136deg)" title="Correct" />
    <MarkerTool tool={Tool.Question} title="Question" />
    <div class="tool" style:height={$eraserSelected ? "100%" : "30px"} on:click={toggleEraser}>
        <img src={eraserUrl} title="Eraser" draggable="false" />
    </div>
</div>

<style>
    #tools {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        height: 60px;  /* Height when active */
        gap: 10px;
    }

    #tools img {
        width: 100%;
    }
</style>
