<script lang="ts">
  import {writable} from "svelte/store";
  import Tool from "$lib/Tool";
  import Tools from "./Tools.svelte";
  import MultilayerCanvas from "./MultilayerCanvas.svelte";
  import {db} from "$lib/db";
  import {liveQuery} from "dexie";
  import AttemptPreview from "$lib/AttemptPreview.svelte";

  // Reactive vars
  const selectedTool = writable(Tool.None);

  const problemId = 2;
  const attemptId = 0;

  const attempts = liveQuery(
    () => db.files.get(problemId).then(problem => problem!.attempts)
  );
</script>

<MultilayerCanvas {selectedTool} {problemId} {attemptId} />
<Tools selected={selectedTool} />
<div class="fixed right-0 top-0 flex flex-row p-3">
    {#each $attempts ?? [] as attempt, idx}
        <AttemptPreview {attempt} {idx} />
    {/each}
</div>
