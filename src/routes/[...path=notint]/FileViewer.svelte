<script lang="ts">
    import {readable} from "svelte/store";
    import {liveQuery, type Observable} from "dexie";
    import {db} from "$lib/db";
    import {page} from "$app/stores";
    import path from "path";
    import {base} from "$app/paths";

    let files = readable([]) as Observable<Array<File>>;
    // Ignore, it is the right type
    $: files = liveQuery(() =>
      // Conditional check on $page.params.path b/c "" is duplicated on empty route
      db.files.where({"[route]": [["", ...($page.params.path ? $page.params.path.split("/") : [])]]}).toArray()
    );
</script>

<div class="flex flex-wrap justify-evenly gap-5">
    {#each $files as file (file.id)}
        <a class="text-center w-[6rem]" href={path.join("/", base, $page.params.path, file.id.toString())}>
            <div class="w-full aspect-square bg-red-500 m-auto"></div>
            <div>{file.name}</div>
        </a>
    {/each}
    <!-- Padding to make sure `justify-evenly` places extra items left-aligned -->
    {#each Array(10) as _}
        <div class="w-[6rem]"></div>
    {/each}
</div>
