<script lang="ts">
  import {derived, writable} from "svelte/store";
  import Tool from "$lib/Tool";
  import Tools from "./Tools.svelte";
  import MultilayerCanvas from "./MultilayerCanvas.svelte";
  import {page} from "$app/stores";
  import QuestionManagement from "./QuestionManagement.svelte";
  import Attempts from "./Attempts.svelte";
  import {db, type File} from "$lib/db";
  import {goto} from "$app/navigation";
  import * as path from "$lib/path";
  import ProblemViewer from "./ProblemViewer.svelte";
  import {setContext} from "svelte";

  // Reactive vars
  const selectedTool = writable(Tool.None);
  const eraserEnabled = writable(false);

  setContext("eraserEnabled", eraserEnabled);

  const problemId = derived(page, $page => $page.data.problemId);
  const attemptId = derived(page, $page => $page.data.attemptIdx);
  let fileRoute: string;

  /**
   * Ensures `file.route` is a child of `page.params.path`. If not, modify URL so that it is
   * @param file attempt at retrieving `File` for prop `problemId`. If undefined, go back to file explorer.
   * EXCEPTION: problemId == 0, do nothing & let `QuestionManagement` deal with it b/c using a non-work study mode
   */
  function enforceCorrectUrl(file: File | undefined) {
    if ($problemId === 0) return;
    if (file) {
      fileRoute = file.route;
      // Only check startsWith instead of full equality b/c can be incomplete when recursively reviewing a folder.
      // This also means you can't depend on $page.params.path == problemId.route
      if (!fileRoute.startsWith($page.params.path)) {
        goto(path.absJoin(fileRoute, $page.params.problemId));
      }
    } else {
      // If entry doesn't exist, go back to file viewer (automatically making the file may be undesirable and collide w/ autoincr)
      goto(path.upCwd($page));
    }
  }

  $: db.files.get($problemId).then(enforceCorrectUrl);
</script>

<svelte:head>
    <title>MathMan Draw</title>
</svelte:head>

<ProblemViewer problemId={$problemId} />
<MultilayerCanvas {selectedTool} problemId={$problemId} attemptId={$attemptId} />
<div id="grid">
    <div id="breadcrumbs">
        <a href={path.upCwd($page)}>🏠</a>
        {#each $page.params.path.split("/") as folder}
            <!-- TODO: each folder bring you back to the explorer -->
            /{folder}
        {/each}
    </div>
    <div id="question-management" class="text-right">
        <QuestionManagement problemId={$problemId} problemRoute={fileRoute} />
    </div>
    <div id="tools-container"><Tools selected={selectedTool} /></div>
    <div id="attempts-container" class="flex flex-col p-3 gap-3">
        <Attempts problemId={$problemId} />
    </div>
</div>

<style>
    #grid {
        --safe-area-top: 20px;
        --safe-area-left: 0;
        /* TODO: tailwindify */
        --safe-area-right: calc(100px + 0.75rem * 2);
        --safe-area-bottom: calc(60px + env(safe-area-inset-bottom));

        pointer-events: none;
        position: fixed;
        height: 100dvh;
        width: 100vw;
        display: grid;
        padding-top: env(safe-area-inset-top);
        grid-template-columns: 50vw auto min-content;
        grid-template-rows: var(--safe-area-top) auto var(--safe-area-bottom);
    }

    #tools-container > :global(* > *),
    #attempts-container > :global(*),
    #question-management > :global(*),
    #breadcrumbs > :global(*) {
        /* This is important b/c it allows drawing on the canvas underneath & selecting UI elements */
        pointer-events: all;
    }

    #tools-container {
        grid-column: 1 / 4;
        grid-row: 3 / 3;
    }

    #attempts-container {
        grid-column: 3 / 4;
        grid-row: 1 / 4;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>
