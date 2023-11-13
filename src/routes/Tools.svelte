<script lang="ts">
    import "./Tools.css";
    import Tool from "$lib/Tool";
    import type {Writable} from "svelte/store";

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
</script>

<div id="tools">
    <div style="width: 30px; filter: grayscale(1);" on:click={launchTool} data-tool={Tool.Draw}>
        <img src="marker.png" title="Your work" draggable="false" />
    </div>
    <div style="width: 30px; filter: hue-rotate(136deg);" on:click={launchTool} data-tool={Tool.Correct}>
        <img src="marker.png" title="Correct" draggable="false" />
    </div>
    <div style="width: 30px" on:click={launchTool} data-tool={Tool.Question}>
        <img src="marker.png" title="Question" draggable="false" />
    </div>
    <div style="width: 30px" on:click={launchTool} data-tool={Tool.Erase}>
        <img src="eraser.png" title="Eraser" draggable="false" />
    </div>
</div>
