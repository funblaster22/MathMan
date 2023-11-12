<script lang="ts">
  import {onMount} from "svelte";
  import {writable} from "svelte/store";
  import Tool from "$lib/Tool";
  import Tools from "./Tools.svelte";

  // Reactive vars
  const selectedTool = writable(Tool.None);
  let canvases: HTMLCanvasElement[] = [];

  // TODO: as a consequence of these being reactive, the canvas clears every resize (bad)
  let winWidth = 0;
  let winHeight = 0;

  function updateCanvasSize() {
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
  }

  const colors = {
    [Tool.Draw]: "black",
    [Tool.Correct]: "red",
    [Tool.Question]: "blue",
  } as const;

  onMount(() => {
    window.onresize = updateCanvasSize;
    updateCanvasSize();

    console.log(canvases);

    const layers = canvases.map(canvas => canvas.getContext('2d'));
    let pointerDown = false;

    document.onpointerdown = ev => {
      if ($selectedTool == Tool.None) return;
      const ctx = layers[$selectedTool];
      pointerDown = true;
      ctx.strokeStyle = colors[$selectedTool];
      ctx.beginPath();
      ctx.moveTo(ev.clientX, ev.clientY);
    }
    document.onpointerup = () => pointerDown = false;
    document.onpointermove = ev => {
      if (pointerDown) {
        const ctx = layers[$selectedTool];
        ctx.lineTo(ev.clientX, ev.clientY);
        ctx.stroke();
      }
    }
  });
</script>

<canvas bind:this={canvases[Tool.Draw]} width={winWidth} height={winHeight}></canvas>
<canvas bind:this={canvases[Tool.Correct]} width={winWidth} height={winHeight}></canvas>
<canvas bind:this={canvases[Tool.Question]} width={winWidth} height={winHeight}></canvas>
<Tools selected={selectedTool} />

<style>
  canvas {
    position: fixed;
    left: 0;
    right: 0;
  }
</style>
