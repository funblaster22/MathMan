<script lang="ts">
  import {goto} from "$app/navigation";
  import AttemptPreview from "$lib/AttemptPreview.svelte";
  import {liveQuery} from "dexie";
  import {type Attempt, db} from "$lib/db";

  export let problemId: number;

  const attempts = liveQuery(
    () => db.files.get(problemId).then(problem => problem!.attempts)
  );

  function newAttempt() {
    db.files.update(problemId, file => {
      // It's ok Attempt is empty, it'll get overwritten soon
      goto("?attempt=" + file.attempts!.push({} as Attempt))
    });
  }
</script>

{#each $attempts ?? [] as attempt, idx}
    <div on:click={() => goto("?attempt=" + (idx + 1))}>
        <AttemptPreview {attempt} {idx} />
    </div>
{/each}
<div class="text-center bg-gray-50 rounded-md" on:click={newAttempt}>
    <!-- TODO: replace w, h, leading w/ dynamic values -->
    <div class="w-[100px] h-[76px] align-middle text-5xl leading-[1.65]">➕</div>
    New Attempt
</div>
