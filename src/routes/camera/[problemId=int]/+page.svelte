<script lang="ts">
  import {onDestroy, onMount} from "svelte";
  import {db} from "$lib/db";
  import {page} from "$app/stores";

  let video: HTMLVideoElement;
  let roi: HTMLDivElement;

  onMount(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
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
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, width, height);

    // TODO: this requires a redraw, which is expensive. I could probably do the nessisary math myself
    const roiBox = roi.getBoundingClientRect();
    const scaleFactor = width / window.innerWidth;

    const imgData = context.getImageData(roiBox.x * scaleFactor, roiBox.y * scaleFactor, roiBox.width * scaleFactor, roiBox.height * scaleFactor);

    db.files.update(Number.parseInt($page.params.problemId), {question: imgData}).then(() => history.back());
  }
</script>

<!-- Preview -->
<div class="fixed inset-x-0 inset-y-0">
    <video bind:this={video} class="w-full"></video>
</div>

<!-- Crosshairs -->
<div class="fixed w-full h-[60vh] inset-x-0 top-0 flex items-center justify-center">
    <div bind:this={roi} class="resize overflow-auto border min-w-12 min-h-12"></div>
</div>

<!-- Shutter -->
<div class="fixed inset-x-0 bottom-12">
    <button class="rounded-full bg-red-500 m-auto block w-12 h-12" on:click={takePicture}></button>
</div>
