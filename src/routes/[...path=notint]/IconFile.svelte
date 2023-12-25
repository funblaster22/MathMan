<script lang="ts">
  import * as path from "$lib/path";
  import {page} from "$app/stores";

  // Relative to `/base/$page.params.path`
  export let href: string;
  export let emoji: string;
  export let title: string | undefined;

  let fullHref: string;
  $: fullHref = path.absJoin($page.params.path, href);
</script>

<div class="text-center w-[6rem]">
    <a href={fullHref}>
        <div class="text-7xl aspect-square perfect-center font-mono">{emoji}</div>
    </a>
    <slot>
        <a href={fullHref} class="text-center w-[6rem]">{title}</a>
    </slot>
</div>
