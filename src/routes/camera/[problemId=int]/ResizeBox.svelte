<script lang="ts">
  // Needed b/c ios on safari doesn't support `resize` css attribute

  export let size: [number, number] = [170, 70];

  function startDrag(ev: PointerEvent) {
    document.onpointermove = drag;
    document.onpointerup = endDrag;
  }
  function drag(ev: PointerEvent) {
    size[0] = (ev.clientX - window.innerWidth / 2) * 2;
    // Idk why it's like this. Hard-coding 60vh
    size[1] = (ev.clientY - (window.innerHeight * 0.6) / 2) * 2;
  }
  function endDrag() {
    document.onpointermove = document.onpointerup = null;
  }
</script>

<div class="relative overflow-auto border min-w-12 min-h-12 border-orange-400" style:width={size[0] + "px"} style:height={size[1] + "px"}>
    <div class="absolute right-0 bottom-0 w-5 h-5 bg-orange-400 cursor-nw-resize" on:pointerdown={startDrag}></div>
</div>

<style>
    div {
        /* VERY IMPORTANT to prevent touch drags from being canceled */
        touch-action: none;
    }
</style>
