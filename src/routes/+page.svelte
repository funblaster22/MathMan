<script lang="ts">
  import {writable} from "svelte/store";
  import Tool from "$lib/Tool";
  import Tools from "./Tools.svelte";
  import MultilayerCanvas from "./MultilayerCanvas.svelte";

  // Reactive vars
  const selectedTool = writable(Tool.None);

  const problemId = 2;
  const attemptId = 0;
</script>

<MultilayerCanvas {selectedTool} {problemId} {attemptId} />
<Tools selected={selectedTool} />
