<script lang="ts">
  import {goto} from "$app/navigation";
  import AttemptPreview from "$lib/AttemptPreview.svelte";
  import {liveQuery, type Observable} from "dexie";
  import {type Attempt, Db, db} from "$lib/db";

  export let problemId: number;

  let attempts: Observable<Attempt[]>;
  $: attempts = liveQuery(
    () => db.files.get(problemId).then(problem => problem!.attempts)
  );

  function newAttempt() {
    db.files.update(problemId, file => {
      goto("?attempt=" + file.attempts!.push(Db.newBlankAttempt()))
    });
  }
</script>

<!-- TODO: I'm not sure why layout shifts when scrollbar present -->
{#each $attempts ?? [] as attempt, idx ("" + problemId + idx)}
    <div on:click={() => goto("?attempt=" + (idx + 1))}>
        <AttemptPreview {attempt} {idx} />
    </div>
{/each}
<div class="text-center bg-gray-50 rounded-md w-[100px]" on:click={newAttempt}>
    <!-- TODO: replace w, h, leading w/ dynamic values -->
    <div class="w-[100px] h-[76px] align-middle text-5xl leading-[1.65]">➕</div>
    New Attempt
</div>
