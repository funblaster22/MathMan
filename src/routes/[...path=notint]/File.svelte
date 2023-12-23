<script lang="ts">
  import {db, Db, type File} from "$lib/db";
  import type {Writable} from "svelte/store";
  import path from "path";
  import {base} from "$app/paths";
  import {page} from "$app/stores";

  export let file: File;
  export let deleteEnabled: Writable<boolean>;

  const href = path.join("/", base, $page.params.path, file.id!.toString());

  /** Retrieve date of most recent attempt in given `file` */
  const recentestAttempt = (function(file: File) {
    if (file.attempts.length === 0)
      return Db.newBlankAttempt();
    return file.attempts.reduce((prev, current) => {
      return current.date > prev.date ? current : prev;
    });
  })(file);

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

  /** Show attempts or delete file, depending on state */
  function auxButtonClicked(id: number) {
    if ($deleteEnabled) {
      db.files.delete(id);
    }
    // TODO: show children
  }
</script>

<div class="text-center w-[6rem] mr-[11px]">
    <div class="relative">
        <a {href}>
            <div class="w-full aspect-square border m-auto grid grid-cols-2 grid-rows-3">
                <div class="m-auto" title="Time since last attempt ({timeAgo(recentestAttempt.date, false)})">-{timeAgo(recentestAttempt.date)}</div>
                <div class="m-auto" title="Duration of last attempt ({recentestAttempt.duration} minutes)">⏱️ {recentestAttempt.duration}</div>
                <div class="m-auto" title="Number of attempts">✏️ {file.attempts.length}</div><div></div>
                <div class="m-auto" title="Number of unresolved questions">❔ {file.attempts.reduce((acc, attempt) => acc += attempt.questionCount, 0)}</div>
                <div class="m-auto" title="Weighted average of incorrect problems">❌ {recentestAttempt.mistakeCount}</div>
            </div>
        </a>
        <button class="attempt-dropdown" title="Show attempts" on:click={auxButtonClicked.bind(this, file.id)}>{$deleteEnabled ? "🗑️" : "🔻"}</button>
    </div>
    <a {href}><div>{file.flagged ? (new Date().getMonth() === 5 ? "🏳️‍🌈 " : "🚩 ") : ""}{file.name}</div></a>
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
