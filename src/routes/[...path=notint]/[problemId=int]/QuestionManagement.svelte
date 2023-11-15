<script lang="ts">
  import {goto} from "$app/navigation";
  import {liveQuery} from "dexie";
  import {db} from "$lib/db";

  export let parentFolder: string;

  function changeQuestion(ev: Event) {
    const newId = (ev.target as HTMLSelectElement).value;
    goto(newId);
  }

  const questions = liveQuery(() =>
    db.files.where({parent: parentFolder}).toArray()
  )
</script>

<button>🚩</button>
<select on:change={changeQuestion}>
    {#each $questions ?? [] as question}
        <option value={question.id}>{question.route.at(-1)}</option>
    {/each}
</select>
<button>➡️</button>
