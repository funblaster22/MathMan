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
  import {base} from "$app/paths";
  import path from "path";
  import ProblemViewer from "./ProblemViewer.svelte";

  // Reactive vars
  const selectedTool = writable(Tool.None);

  const problemId = derived(page, $page => Number.parseInt($page.params.problemId));
  const attemptId = derived(page, $page => Number.parseInt($page.url.searchParams.get('attempt') ?? "1") - 1);

  function enforceCorrectUrl(file: File | undefined) {
    // rectify invalid states.
    // Fetch entry for problemId
    // If entry exists and params.path != entry.route, change URL to file.route
    if (file) {
      const fileRoute = file.route.join("/");
      if ("/" + $page.params.path !== fileRoute) {
        goto(path.join("/", base, fileRoute, $page.params.problemId));
      }
    } else {
      // If entry doesn't exist, go back to file viewer (automatically making the file may be undesirable and collide w/ autoincr)
      goto(path.join("/", base, $page.params.path));
    }
  }

  $: {
    if (typeof window !== "undefined") {
      db.files.get($problemId).then(enforceCorrectUrl);
    }
  }
</script>

<svelte:head>
    <title>MathMan Draw</title>
</svelte:head>

<ProblemViewer problemId={$problemId} />
<MultilayerCanvas {selectedTool} problemId={$problemId} attemptId={$attemptId} />
<div id="grid">
    <div id="breadcrumbs">
        <!-- Remember, $page.path does not include the id, so no extra work is needed -->
        <a href={path.join("/", base, $page.params.path)}>🏠</a>
        {#each $page.params.path.split("/") as folder}
            <!-- TODO: each folder bring you back to the explorer -->
            /{folder}
        {/each}
    </div>
    <div id="question-management" class="text-right">
        <QuestionManagement parentFolder={$page.params.path.split("/").at(-1)} />
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
