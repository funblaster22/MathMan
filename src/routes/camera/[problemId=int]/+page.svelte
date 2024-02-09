<script lang="ts">
  import {onDestroy, onMount} from "svelte";
  import {db} from "$lib/db";
  import {page} from "$app/stores";
  import ResizeBox from "./ResizeBox.svelte";
  import {isTouchEnabled} from "$lib";

  let video: HTMLVideoElement;
  let size: [number, number];
  let placeBottom: boolean;
  computePlacement();

  onMount(() => {
    navigator.mediaDevices
      .getUserMedia({ video: {facingMode: "environment"}, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });
  });

  onDestroy(() => {
    (video.srcObject as MediaStream).getVideoTracks()[0].stop()
  });

  function takePicture(ev: MouseEvent) {
    // videoHeight has some extra whitespace at bottom b/c of scaling, but at least it's proportioned correctly
    const [width, height] = [video.videoWidth, video.videoHeight];
    const canvas = document.createElement("canvas");
    canvas.width = width; canvas.height = height;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.drawImage(video, 0, 0, width, height);

    const roiBox = calcCrop();
    const scaleFactor = width / window.innerWidth;

    const imgData = context.getImageData(roiBox.x * scaleFactor, roiBox.y * scaleFactor, roiBox.width * scaleFactor, roiBox.height * scaleFactor);

    db.files.update(Number.parseInt($page.params.problemId), {question: imgData}).then(() => history.back());
  }

  function calcCrop() {
    const {clientWidth, clientHeight} = document.documentElement;
    const cx = clientWidth / 2;
    const cy = clientHeight * 0.3;
    return {
      x: Math.round(cx - size[0] / 2),
      y: Math.round(cy - size[1] / 2),
      width: size[0],
      height: size[1],
    }
  }

  function computePlacement() {
    placeBottom = window.innerWidth < window.innerHeight ? true : !isTouchEnabled();
  }
</script>

<!-- Preview -->
<div class="fixed inset-x-0 inset-y-0">
    <video bind:this={video} class="w-full"></video>
</div>

<!-- Crosshairs -->
<div class="fixed w-full h-[60vh] inset-x-0 top-0 flex items-center justify-center">
    <ResizeBox bind:size />
</div>

<!-- Shutter -->
<div class="fixed flex justify-center items-center" class:placeBottom class:placeRight={!placeBottom}>
    <button class="rounded-full bg-orange-400 w-[5rem] h-[5rem]" on:click={takePicture}></button>
</div>
<svelte:window on:resize={computePlacement} />

<style>
    .placeBottom {
        left: 0;
        right: 0;
        bottom: 3rem;
    }
    .placeRight {
        top: 0;
        bottom: 0;
        right: 3rem;
    }
</style>
