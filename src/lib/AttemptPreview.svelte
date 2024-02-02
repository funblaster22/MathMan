<script lang="ts">
  import {onMount} from "svelte";
  import type {Attempt} from "$lib/db";

  export let attempt: Attempt;
  export let idx: number;
  export let size: number = 100;

  // Is briefly HTMLCanvasElement
  let canvas: HTMLCanvasElement;

  function scaleImageData(dst: CanvasRenderingContext2D, layers: ImageData[]) {
    const auxCanvas = document.createElement("canvas");
    auxCanvas.width = layers[0].width;
    auxCanvas.height = layers[0].height;
    // TODO: replace 24 with line height (see HTML also)
    dst.scale(size / auxCanvas.width, (size - 24) / auxCanvas.height);

    for (const imageData of layers) {
      auxCanvas.getContext("2d").putImageData(imageData, 0, 0);
      dst.drawImage(auxCanvas, 0, 0);
    }
  }

  onMount(async () => {
    const ctx = canvas.getContext("2d");

    scaleImageData(ctx, [attempt.work, attempt.error, attempt.questions]);
  });
</script>

<div class="text-center bg-gray-50" style:width={size + "px"}>
    <canvas bind:this={canvas} width={size} height={size - 24}></canvas>
    Attempt {idx + 1}
</div>
