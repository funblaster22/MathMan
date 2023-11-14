<script lang="ts">
  import {derived, writable} from "svelte/store";
  import Tool from "$lib/Tool";
  import Tools from "./Tools.svelte";
  import MultilayerCanvas from "./MultilayerCanvas.svelte";
  import {page} from "$app/stores";
  import QuestionManagement from "./QuestionManagement.svelte";
  import Attempts from "./Attempts.svelte";

  // Reactive vars
  const selectedTool = writable(Tool.None);

  const problemId = derived(page, $page => Number.parseInt($page.params.problemId));
  const attemptId = derived(page, $page => Number.parseInt($page.url.searchParams.get('attempt') ?? "1") - 1);

  // TODO: rectify invalid states.
  // Fetch entry for problemId
  // If entry exists and params.path != entry.route, change URL to entry.route
  // If entry doesn't exist, go back to file viewer (automatically making the file may be undesirable and collide w/ autoincr)
</script>

<MultilayerCanvas {selectedTool} problemId={$problemId} attemptId={$attemptId} />
<div id="grid">
    <div>
        <button>🏠</button> MA 162/midterm 1/8.1
    </div>
    <div class="text-right">
        <QuestionManagement />
    </div>
    <div id="tools-container"><Tools selected={selectedTool} /></div>
    <div id="attempts-container" class="flex flex-col p-3 gap-3">
        <Attempts problemId={$problemId} />
    </div>
</div>

<style>
    :root {
        user-select: none;
    }

    #grid {
        --safe-area-top: 20px;
        --safe-area-left: 0;
        /* TODO: tailwindify */
        --safe-area-right: calc(100px + 0.75rem * 2);
        --safe-area-bottom: calc(60px + env(safe-area-inset-bottom));

        pointer-events: none;
        position: fixed;
        height: 100vh;
        width: 100vw;
        display: grid;
        padding-top: env(safe-area-inset-top);
        grid-template-columns: 50vw  auto var(--safe-area-right);
        grid-template-rows: var(--safe-area-top) auto var(--safe-area-bottom);
    }

    #grid > * {
        /* This is important b/c it allows drawing on the canvas underneath & selecting UI elements */
        pointer-events: all;
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
