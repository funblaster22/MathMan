<script lang="ts">
  import {goto} from "$app/navigation";
  import {liveQuery} from "dexie";
  import {db} from "$lib/db";
  import {page} from "$app/stores";

  enum StudyMode {
    Work = "Work",
    Mistakes = "Mistakes",
    Questions = "Questions",
  }

  export let parentFolder: string;
  export let problemId: number;

  let studyMode = StudyMode.Work;
  $: console.log(studyMode);
  let flagged = false;
  let fileName: string;
  $: db.files.get(problemId).then(file => {
    flagged = file?.flagged ?? false;
    fileName = file?.name ?? "";
  });

  function changeQuestion(ev: Event) {
    const newId = (ev.target as HTMLSelectElement).value;
    goto(newId);
  }

  function nextQuestion() {
    switch (studyMode) {
      case StudyMode.Work:
        const numberMatch = Array.from(fileName.matchAll(/\d+/g)).at(-1);
        const newFilename: string[] = [];
        if (numberMatch != undefined)
          newFilename[0] =
            fileName.substring(0, numberMatch.index)
            + (Number.parseInt(numberMatch[0]) + 1)
            + fileName.substring(numberMatch.index + numberMatch[0].length)
          ;
        db.newFile({basePath: $page.data.path, route: newFilename}).then(id => {
          if (id >= 0) goto(String(id))
        });
    }
  }

  function toggleFlag() {
    flagged = !flagged;
    db.files.update(problemId, {flagged});
  }

  const questions = liveQuery(() =>
    db.files.where({parent: parentFolder}).toArray()
  )
</script>

<button on:click={toggleFlag} title={(flagged ? "un" : "") + "flag for later"}>{flagged ? (new Date().getMonth() === 5 ? "🏳️‍🌈" : "🚩") : "🏳️"}</button>
<select bind:value={studyMode}>
    {#each Object.keys(StudyMode) as mode}
        <option value={mode}>{StudyMode[mode]}</option>
    {/each}
</select>
<!-- TODO: this for some reason only properly loads on reload -->
<select on:change={changeQuestion}>
    {#each $questions ?? [] as question}
        <option value={question.id} selected={question.name === fileName}>{question.name}</option>
    {/each}
</select>
<button on:click={nextQuestion}>➡️</button>
