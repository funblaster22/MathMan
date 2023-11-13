<script lang="ts">
  import {db} from "$lib/db";
  import Tool from "$lib/Tool";
  import {onMount} from "svelte";
  import type {Writable} from "svelte/store";

  export let selectedTool: Writable<Tool>;
  export let problemId: number;
  export let attemptId: number;

  //#region Reactive vars
  let winWidth = 0;
  let winHeight = 0;
  //#endregion

  // This technically is fist initialized to CanvasElements, but is immediately changed in onMount.
  // I don't want unused data causing confusion
  let layers: CanvasRenderingContext2D[] = [];

  function updateCanvasSize() {
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    requestAnimationFrame(async () => {
      // !. is acceptable here b/c if I'm editing an attempt (this screen), then it must exist
      const attempt = (await db.files.get(problemId))!.attempts[attemptId];
      layers[Tool.Draw].putImageData(attempt.work, 0, 0);
      layers[Tool.Correct].putImageData(attempt.error, 0, 0);
      layers[Tool.Question].putImageData(attempt.questions, 0, 0);
    })
  }

  function save() {
    const winDim = [0, 0, winWidth, winHeight];
    db.files.update(problemId, file => {
      // !. is acceptable here
      file.attempts![attemptId] = {
        date: new Date(),
        work: layers[Tool.Draw].getImageData(...winDim),
        error: layers[Tool.Correct].getImageData(...winDim),
        questions: layers[Tool.Question].getImageData(...winDim),
        rois: file.attempts![attemptId].rois,
      }
    });
  }

  const colors = {
    [Tool.Draw]: "black",
    [Tool.Correct]: "red",
    [Tool.Question]: "blue",
  } as const;

  onMount(() => {
    window.newFile = () => {
      db.files.add({attempts: [{}], parent: null, route: []});
    }
    window.onresize = updateCanvasSize;
    updateCanvasSize();

    console.log(layers);

    layers = layers.map(canvas => (canvas as HTMLCanvasElement).getContext('2d', {willReadFrequently: true}));
    let pointerDown = false;

    document.onpointerdown = ev => {
      if ($selectedTool == Tool.None) return;
      const ctx = layers[$selectedTool];
      pointerDown = true;
      ctx.strokeStyle = colors[$selectedTool];
      ctx.beginPath();
      ctx.moveTo(ev.clientX, ev.clientY);
    }
    document.onpointerup = () => {
      pointerDown = false;
      save();
    }
    document.onpointermove = ev => {
      if (pointerDown) {
        const ctx = layers[$selectedTool];
        ctx.lineTo(ev.clientX, ev.clientY);
        ctx.stroke();
      }
    }
  });
</script>

<canvas bind:this={layers[Tool.Draw]} width={winWidth} height={winHeight}></canvas>
<canvas bind:this={layers[Tool.Correct]} width={winWidth} height={winHeight}></canvas>
<canvas bind:this={layers[Tool.Question]} width={winWidth} height={winHeight}></canvas>

<style>
    canvas {
        position: fixed;
        left: 0;
        right: 0;
    }
</style>
