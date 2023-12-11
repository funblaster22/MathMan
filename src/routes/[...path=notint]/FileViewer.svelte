<script lang="ts">
  import {liveQuery, type Observable} from "dexie";
  import {db, type File} from "$lib/db";
  import {page} from "$app/stores";
  import path from "path";
  import {base} from "$app/paths";

  /** Retrieve date of most recent attempt in given `file` */
  function recentestAttempt(file: File) {
    if (file.attempts.length === 0)
      return {date: new Date(0), duration: 0};
    return file.attempts.reduce((prev, current) => {
        return current.date > prev.date ? current : prev;
    });
  }

  /**
   * Report a relative date in the most logical unit (days until 10, weeks until 16, months until 12, years).
   * @param date Time since now to report
   * @param terse if true, use units d, w, m, or y. Otherwise, days, weeks, months, years (respectively)
   * @returns formatted string. Ex: -5d (5 days ago), -6
   */
  function timeAgo(date: Date, terse = true): string {
    const now = new Date();
    const daysAgo = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
    if (daysAgo <= 10) {
      return Math.floor(daysAgo) + (terse ? "d" : " days");
    }
    const weeksAgo = daysAgo / 7;
    if (weeksAgo <= 16) {
      return Math.floor(weeksAgo) + (terse ? "w" : " weeks");
    }
    const yearsAgo = now.getFullYear() - date.getFullYear();
    const monthsAgo = yearsAgo * 12 + (now.getMonth() - date.getMonth());
    if (monthsAgo < 12) {
      return monthsAgo + (terse ? "m" : " months");
    }
    return Math.floor(monthsAgo / 12) + (terse ? "y" : " years");
  }

  // Variable initializer is not redundant (TODO: check if this is a SSR quirk)
  let files: Observable<File[]>;
  // Ignore, it is the right type
  $: files = liveQuery(() =>
    // Conditional check on $page.params.path b/c "" is duplicated on empty route
    db.files.where({"[route]": [["", ...($page.params.path ? $page.params.path.split("/") : [])]]}).toArray()
  );
</script>

<div class="flex flex-wrap justify-evenly gap-3">
    {#each ($files ?? []) as file (file.id)}
        <!-- TODO: replace w/ file!.id once Svelte supports typescript in markup https://github.com/sveltejs/svelte/issues/4701 -->
        {@const href = path.join("/", base, $page.params.path, file.id.toString())}
        {@const myRecentestAttempt = recentestAttempt(file)}
        <div class="text-center w-[6rem] mr-[11px]">
            <div class="relative">
                <a {href}>
                    <div class="w-full aspect-square border m-auto grid grid-cols-2 grid-rows-3">
                        <div class="m-auto" title="Time since last attempt ({timeAgo(myRecentestAttempt.date, false)})">-{timeAgo(myRecentestAttempt.date)}</div>
                        <div class="m-auto" title="Duration of last attempt ({myRecentestAttempt.duration} minutes)">⏱️ {myRecentestAttempt.duration}</div>
                        <div class="m-auto" title="Number of attempts">✏️ {file.attempts.length}</div><div></div>
                        <div class="m-auto" title="Number of unresolved questions">❔ {file.questions}</div>
                        <div class="m-auto" title="Weighted average of incorrect problems">❌ {file.mistakes}</div>
                    </div>
                </a>
                <button class="attempt-dropdown" title="Show attempts">🔻</button>
            </div>
            <a {href}><div>{file.name}</div></a>
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
