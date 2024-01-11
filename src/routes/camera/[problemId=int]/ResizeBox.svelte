<script lang="ts">
  // Needed b/c ios on safari doesn't support `resize` css attribute

  export let size: [number, number] = [170, 70];

  function startDrag() {
    document.onpointermove = drag;
    document.onpointerup = endDrag;
    console.log("starting drag");
  }
  function drag(ev: PointerEvent) {
    size[0] += ev.movementX;
    size[1] += ev.movementY;
    console.log(size, ev.movementX, ev.movementY);
  }
  function endDrag() {
    document.onpointermove = document.onpointerup = null;
    console.log("drag stopped")
  }
</script>

<div class="relative overflow-auto border min-w-12 min-h-12" style:width={size[0] + "px"} style:height={size[1] + "px"}>
    <div class="absolute right-0 bottom-0 w-5 h-5 bg-red-50 cursor-nw-resize" on:pointerdown={startDrag}></div>
</div>

<style>
    div {
        /* VERY IMPORTANT to prevent touch drags from being canceled */
        touch-action: none;
    }
</style>
