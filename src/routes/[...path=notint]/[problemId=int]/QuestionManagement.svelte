<script lang="ts">
  import {goto} from "$app/navigation";
  import {liveQuery, type Observable} from "dexie";
  import {db, type FileSlim} from "$lib/db";
  import {page} from "$app/stores";
  import {searchSet} from "$lib";

  enum StudyMode {
    Work = "Work",
    Mistakes = "Mistakes",
    Questions = "Questions",
  }

  export let problemRoute: string;
  export let problemId: number;

  let studyMode = $page.url.searchParams.get("studyMode") as StudyMode ?? StudyMode.Work;
  $: searchSet("studyMode", studyMode);
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
        let newFilename: string | undefined;
        if (numberMatch != undefined)
          newFilename =
            fileName.substring(0, numberMatch.index)
            + (Number.parseInt(numberMatch[0]) + 1)
            + fileName.substring(numberMatch.index + numberMatch[0].length)
          ;
        db.newFile({basePath: $page.params.path, route: newFilename}).then(id => {
          if (id >= 0) goto(String(id))
        });
    }
  }

  function toggleFlag() {
    flagged = !flagged;
    db.files.update(problemId, {flagged});
  }

  const questions: Observable<FileSlim[]> = liveQuery(() =>
    // Fetch all then filter later b/c requerying w/ `filter` will just re-fetch & iterate over cursor
    // Could also have consequence where starting new attempt in "error" mode could remove the problem from list immediately
    db.files.where("route").startsWith($page.params.path).toArray().then(files => files.map(file =>
      ({
        // Only store necessary fields in memory
        id: file.id,
        route: file.route,
        name: file.name,
        attempts: file.attempts.map(attempt => ({
          questions: attempt.questionCount,
          mistakes: attempt.mistakeCount
        }))
      })
    ))
  );

  let questionsFiltered: FileSlim[] = [];
  $: {
    const qs = $questions ?? [];
    switch (studyMode) {
      case StudyMode.Work:
        questionsFiltered = qs.filter(question => question.route === problemRoute).sort((a, b) => a.name.localeCompare(b.name));
        break;
      case StudyMode.Mistakes:
        questionsFiltered = qs.filter(question => question.attempts.at(-1)!.mistakes > 0);
        break;
      case StudyMode.Questions:
        questionsFiltered = qs.filter(question => question.attempts.some(att => att.questions > 0));
        break;
    }
  }
</script>

<button on:click={toggleFlag} title={(flagged ? "un" : "") + "flag for later"}>{flagged ? (new Date().getMonth() === 5 ? "🏳️‍🌈" : "🚩") : "🏳️"}</button>
<select bind:value={studyMode}>
    {#each Object.keys(StudyMode) as mode}
        <option value={mode}>{StudyMode[mode]}</option>
    {/each}
</select>
<!-- TODO: this for some reason only properly loads on reload -->
<select on:change={changeQuestion}>
    {#each questionsFiltered as question}
        <option value={question.id} selected={question.name === fileName}>{question.name}</option>
    {/each}
</select>
<button on:click={nextQuestion}>➡️</button>
