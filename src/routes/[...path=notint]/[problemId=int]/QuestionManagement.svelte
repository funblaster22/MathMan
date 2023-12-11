<script lang="ts">
  import {goto} from "$app/navigation";
  import {liveQuery} from "dexie";
  import {db} from "$lib/db";

  export let parentFolder: string;
  export let problemId: number;

  let flagged = false;
  $: db.files.get(problemId).then(file => flagged = file?.flagged ?? false);

  function changeQuestion(ev: Event) {
    const newId = (ev.target as HTMLSelectElement).value;
    goto(newId);
  }

  function toggleFlag() {
    flagged = !flagged;
    db.files.update(problemId, {flagged});
  }

  const questions = liveQuery(() =>
    db.files.where({parent: parentFolder}).toArray()
  )
</script>

<button on:click={toggleFlag}>{flagged ? (new Date().getMonth() === 5 ? "🏳️‍🌈" : "🚩") : "🏳️"}</button>
<!-- TODO: this for some reason only properly loads on reload -->
<select on:change={changeQuestion}>
    {#each $questions ?? [] as question}
        <option value={question.id}>{question.name}</option>
    {/each}
</select>
<button>➡️</button>
