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
<div id="grid">
    <div id="tools-container"><Tools selected={selectedTool} /></div>
    <div id="attempts-container" class="flex flex-col p-3 gap-3">
        {#each $attempts ?? [] as attempt, idx}
            <AttemptPreview {attempt} {idx} />
        {/each}
        <div class="text-center bg-gray-50 rounded-md">
            <!-- TODO: replace w, h, leading w/ dynamic values -->
            <div class="w-[100px] h-[76px] align-middle text-5xl leading-[1.65]">➕</div>
            New Attempt
        </div>
    </div>
</div>

<style>
    #grid {
        --safe-area-top: 20px;
        --safe-area-left: 0;
        /* TODO: tailwindify */
        --safe-area-right: calc(100px + 0.75rem * 2);
        --safe-area-bottom: calc(60px + env(safe-area-inset-bottom));

        position: fixed;
        height: 100vh;
        width: 100vw;
        display: grid;
        padding-top: env(safe-area-inset-top);
        grid-template-columns: 60px  auto var(--safe-area-right);
        grid-template-rows: var(--safe-area-top) auto var(--safe-area-bottom);
    }

    #tools-container {
        grid-column: 1 / 4;
        grid-row: 3 / 3;
    }

    #attempts-container {
        grid-column: 3 / 4;
        grid-row: 1 / 3;
    }
</style>
