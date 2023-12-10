<script lang="ts">
  import type Movable from "svelte-moveable";
  import {db} from "$lib/db";

  export let problemId: number;

  let canvas: HTMLCanvasElement;
  let movable: Movable;

  $: db.files.get(problemId).then(file => {
    if (file?.question) {
      canvas.width = file.question.width;
      canvas.height = file.question.height;
      canvas.getContext("2d")!.putImageData(file.question, 0, 0);
    }
  });

  function onMouseDown(e: MouseEvent) {
    setTimeout(() => {
      movable.dragStart(e);
    });
  }
</script>

<canvas class="fixed left-0 top-[2em]" bind:this={canvas} on:mousedown={onMouseDown}></canvas>
<!-- TODO: figure out drag to move -->
<!--Movable
        bind:this={movable}
        target={canvas}
        origin={false}
        edge={false}
        draggable={true}
        throttleDrag={0}
/-->
