<script lang="ts">
  import {db} from "$lib/db";
  import Tool from "$lib/Tool";
  import {getContext, onMount} from "svelte";
  import type {Writable} from "svelte/store";

  export let selectedTool: Writable<Tool>;
  export let problemId: number;
  export let attemptId: number;

  // TODO: I'm fearing at some point I'll have to rewrite MultilayerCanvas & db schema so each path is its own object w/ (x,y) position

  //#region Reactive vars
  let winWidth = 0;
  let winHeight = 0;
  let pointerDown = false;
  let eraserEnabled = getContext<Writable<boolean>>("eraserEnabled");
  // Milliseconds since epoch that this attempt started. TODO: this state will get messed up when taking picture, but oh well
  let startTime: number;
  //#endregion

  // This technically is fist initialized to CanvasElements, but is immediately changed in onMount.
  // I don't want unused data causing confusion
  let layers: CanvasRenderingContext2D[] = [];

  function updateCanvasSize() {
    // neither Window nor IndexedDB is defined on server. ProblemId must also be defined
    if (typeof window === "undefined" || problemId === 0) return;
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    requestAnimationFrame(async () => {
      // For some reason, layers can be null in this case
      // TODO: debounce or maybe set canvas size to max(width, height) so doesn't have to redraw if rotated or resized
      if (layers[0] == undefined)
        return;
      // !. is acceptable here b/c if I'm editing an attempt (this screen), then it must exist
      const attempt = (await db.files.get(problemId))!.attempts[attemptId];
      layers[Tool.Draw].putImageData(attempt.work, 0, 0);
      layers[Tool.Correct].putImageData(attempt.error, 0, 0);
      layers[Tool.Question].putImageData(attempt.questions, 0, 0);
    })
  }

  $: {
    // @ts-ignore needed to ensure dependants recognised
    updateCanvasSize(problemId, attemptId);
    startTime = new Date().getTime();
    for (const layer of layers) {
      const canvas = layer.canvas;
      layer.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  const save = () => {
    const winDim = [0, 0, winWidth, winHeight] as const;
    db.files.update(problemId, file => {
      // !. is acceptable here
      const attempt = file.attempts![attemptId];
      attempt.date = new Date();
      attempt.duration = Math.floor((new Date().getTime() - startTime) / 1000 / 60);
      // TODO: properly count questions & mistakes
      if ($selectedTool == Tool.Correct) attempt.mistakeCount = 1;
      if ($selectedTool == Tool.Question) attempt.questionCount = 1;

      // $selectedTool < 3 not needed b/c `pointerDown` can only be set if selected first 3 tools, and `save()` is only called if `pointerDown=true`
      attempt[(["work", "error", "questions"] as const)[$selectedTool as number]] = layers[$selectedTool].getImageData(...winDim);
    });
  };

  const isDarkMode = typeof window === "undefined" ? false : window.matchMedia('(prefers-color-scheme: dark)').matches;
  const colors = {
    // TODO: since color is baked into canvas, if user ever switches color scheme, they're screwed
    [Tool.Draw]: isDarkMode ? "white" : "black",
    [Tool.Correct]: "red",
    [Tool.Question]: "blue",
  } as const;

  const onpointerdown = (ev: PointerEvent) => {
    // TODO: erase all layers if no color selected
    if ($selectedTool >= Tool.None) return;
    const ctx = layers[$selectedTool];
    pointerDown = true;
    ctx.strokeStyle = colors[$selectedTool as keyof typeof colors];
    ctx.lineWidth = $eraserEnabled ? 20 : 1;
    ctx.globalCompositeOperation = $eraserEnabled ? "destination-out" : "source-over";
    // Path never closed, OK. Prevents undoing erase when new path
    ctx.beginPath();
    ctx.moveTo(ev.clientX, ev.clientY);
  }
  const onpointerup = () => {
    // Check needed b/c event fired on document level (might be clicking UI, not drawing)
    if (pointerDown)
        save();
    pointerDown = false;
    // TODO: adjust ROI bounds after erasing
  }
  const onpointermove = (ev: PointerEvent) => {
    if (pointerDown) {
      const ctx = layers[$selectedTool];
      ctx.lineTo(ev.clientX, ev.clientY);
      ctx.stroke();
    }
  }

  onMount(() => {
    window.addEventListener("resize", updateCanvasSize);
    document.addEventListener("pointermove", onpointermove);
    document.addEventListener("pointerup", onpointerup);

    layers = layers.map(canvas => (canvas as HTMLCanvasElement).getContext('2d', {willReadFrequently: true}));
  });
</script>

<canvas bind:this={layers[Tool.Draw]} width={winWidth} height={winHeight}></canvas>
<canvas bind:this={layers[Tool.Correct]} width={winWidth} height={winHeight}></canvas>
<!-- Bind pointerdown here ensures you clicked canvas as opposed to UI.
Allowed to finish or draw over UI, so pointermove & pointerup bound at document level -->
<canvas bind:this={layers[Tool.Question]} width={winWidth} height={winHeight}
        on:pointerdown={onpointerdown}></canvas>

<style>
    canvas {
        position: fixed;
        left: 0;
        right: 0;
        touch-action: none;
    }
    :global(*) {
        touch-action: none;
    }
</style>
