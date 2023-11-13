<script lang="ts">
  import {onMount} from "svelte";
  import {type Attempt} from "$lib/db";

  export let attempt: Attempt;
  export let idx: number;
  export let size: number = 100;

  // Is briefly HTMLCanvasElement
  let canvas: HTMLCanvasElement;

  function scaleImageData(dst: CanvasRenderingContext2D, layers: ImageData[]) {
    const auxCanvas = document.createElement("canvas");
    auxCanvas.width = layers[0].width;
    auxCanvas.height = layers[0].height;
    dst.scale(size / auxCanvas.width, size / auxCanvas.height);

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

<div class="text-center bg-gray-50 rounded-md">
    <canvas bind:this={canvas} width={size} height={size}></canvas>
    Attempt {idx + 1}
</div>
