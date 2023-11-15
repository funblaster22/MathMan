<script lang="ts">
  import {goto} from "$app/navigation";
  import {liveQuery} from "dexie";
  import {db} from "$lib/db";

  export let parentFolder: string;

  function changeQuestion(ev: Event) {
    goto("4")
  }

  const questions = liveQuery(() =>
    db.files.where({parent: parentFolder}).toArray()
  )
</script>

<button>🚩</button>
<select on:change={changeQuestion}>
    {#each $questions ?? [] as question}
        <option name={question.id}>{question.route.at(-1)}</option>
    {/each}
</select>
<button>➡️</button>
