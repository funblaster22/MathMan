<script lang="ts">
    import Tool from "$lib/Tool";
    import type {Writable} from "svelte/store";
    import markerUrl from "$lib/img/marker.png"
    import eraserUrl from "$lib/img/eraser.png"
    import path from "path";
    import {base} from "$app/paths";
    import {page} from "$app/stores";
    import SelectorTool from "$lib/tools/SelectorTool.svelte";
    import PopupTool from "$lib/tools/PopupTool.svelte";
    import {setContext} from "svelte";

    export let selected: Writable<Tool>;
    setContext('selection', selected);

    function launchEraser(ev: MouseEvent) {
      // TODO: I'm thinking only erase current layer, but low priority
      launchTool(ev);
    }
</script>

<div id="tools">
    <a href={path.join("/", base, "camera", $page.params.problemId)}>
        📷
    </a>
    <PopupTool selectedData={Tool.Draw}>
        <img style="filter: grayscale(1)" src={markerUrl} title="Your work" draggable="false" />
    </PopupTool>
    <PopupTool selectedData={Tool.Correct}>
        <img style="filter: hue-rotate(136deg)" src={markerUrl} title="Correct" draggable="false" />
    </PopupTool>
    <PopupTool selectedData={Tool.Question}>
        <img src={markerUrl} title="Question" draggable="false" />
    </PopupTool>
    <PopupTool selectedData={Tool.Erase}>
        <img src={eraserUrl} title="Eraser" draggable="false" />
    </PopupTool>
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
