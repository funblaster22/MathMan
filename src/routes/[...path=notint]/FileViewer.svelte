<script lang="ts">
    import {readable} from "svelte/store";
    import {liveQuery, type Observable} from "dexie";
    import {db} from "$lib/db";
    import {page} from "$app/stores";

    let files = readable([]) as Observable<Array<File>>;
    // Ignore, it is the right type
    $: files = liveQuery(() =>
      // Conditional check on $page.params.path b/c "" is duplicated on empty route
      db.files.where({"[route]": [["", ...($page.params.path ? $page.params.path.split("/") : [])]]}).toArray()
    );
</script>

<div class="flex flex-wrap gap-5">
    {#each $files as file (file.id)}
        <a class="text-center" href={file.id}>
            <div class="w-12 h-12 bg-red-500 m-auto"></div>
            <div>{file.name}</div>
        </a>
    {/each}
</div>
