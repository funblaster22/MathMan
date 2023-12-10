<script lang="ts">
    import {readable} from "svelte/store";
    import {liveQuery, type Observable} from "dexie";
    import {db} from "$lib/db";
    import {page} from "$app/stores";
    import path from "path";
    import {base} from "$app/paths";

    // Variable initializer is not redundant (TODO: check if this is a SSR quirk)
    let files = readable([]) as Observable<File[]>;
    // Ignore, it is the right type
    $: files = liveQuery(() =>
      // Conditional check on $page.params.path b/c "" is duplicated on empty route
      db.files.where({"[route]": [["", ...($page.params.path ? $page.params.path.split("/") : [])]]}).toArray()
    ) as Observable<File[]>;  // Cast needed b/c same type, but not recognised
</script>

<div class="flex flex-wrap justify-evenly gap-3">
    {#each $files as file (file.id)}
        <div class="text-center w-[6rem] mr-[11px]">
            <div class="relative">
                <a href={path.join("/", base, $page.params.path, file.id.toString())}>
                    <div class="w-full aspect-square border m-auto grid grid-cols-2 grid-rows-3">
                        <div class="m-auto" title="Days since last attempt">-4d</div>
                        <div class="m-auto" title="Duration of last attempt">⏱️ {77}</div>
                        <div class="m-auto" title="Number of attempts">✏️ {3}</div><div></div>
                        <div class="m-auto" title="Number of unresolved questions">❔ {5}</div>
                        <div class="m-auto" title="Weighted average of incorrect problems">❌ {3}</div>
                    </div>
                </a>
                <button class="attempt-dropdown" title="Show attempts">🔻</button>
            </div>
            <div>{file.name}</div>
        </div>
    {/each}
    <!-- Padding to make sure `justify-evenly` places extra items left-aligned -->
    {#each Array(10) as _}
        <div class="w-[6rem] mr-[11px]"></div>
    {/each}
</div>

<style>
    .attempt-dropdown {
        position: absolute;
        right: -11px;
        top: 50%;
        border: 1px solid;
        border-radius: 1rem;
        background: hsl(var(--b1) / var(--tw-bg-opacity, 1));
        transform: translateY(-50%);
    }
</style>
