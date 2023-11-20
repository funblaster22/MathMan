<script lang="ts">
    import "./Tools.css";
    import Tool from "$lib/Tool";
    import type {Writable} from "svelte/store";
    import markerUrl from "$lib/img/marker.png"
    import eraserUrl from "$lib/img/eraser.png"
    import path from "path";
    import {base} from "$app/paths";
    import {page} from "$app/stores";

    export let selected: Writable<Tool>;

    // Adapted from https://glitch.com/edit/#!/fridge-os?path=index.js

    function launchTool(ev: MouseEvent) {
      ev.stopPropagation();
      const container = ev.currentTarget as HTMLElement;
      const shouldClose = container.style.height == '100%';
      for (const elem of document.querySelectorAll('#tools > div')) elem.style.height = '30px';  // This should match index.css
      for (const elem of document.querySelectorAll('.tool')) elem.id = '';
      if (shouldClose) {
        selected.set(Tool.None);
        return;
      }
      selected.set(Number.parseInt(container.dataset.tool));
      container.style.height = '100%';
    }

    function launchEraser(ev: MouseEvent) {
      // TODO: I'm thinking only erase current layer, but low priority
      launchTool(ev);
    }
</script>

<div id="tools">
    <a href={path.join("/", base, "camera", $page.params.problemId)}>
        📷
    </a>
    <div style="width: 30px; filter: grayscale(1);" on:click={launchTool} data-tool={Tool.Draw}>
        <img src={markerUrl} title="Your work" draggable="false" />
    </div>
    <div style="width: 30px; filter: hue-rotate(136deg);" on:click={launchTool} data-tool={Tool.Correct}>
        <img src={markerUrl} title="Correct" draggable="false" />
    </div>
    <div style="width: 30px" on:click={launchTool} data-tool={Tool.Question}>
        <img src={markerUrl} title="Question" draggable="false" />
    </div>
    <div style="width: 30px" on:click={launchEraser} data-tool={Tool.Erase}>
        <img src={eraserUrl} title="Eraser" draggable="false" />
    </div>
</div>
