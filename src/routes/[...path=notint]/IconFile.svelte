<script lang="ts">
  import path from "path";
  import {base} from "$app/paths";
  import {page} from "$app/stores";

  // Relative to `/base/$page.params.path`
  export let href: string;
  export let emoji: string;
  export let title: string;
</script>

<a href={path.join("/", base, $page.params.path, href)} class="text-center w-[6rem]">
    <div class="text-7xl aspect-square perfect-center font-mono">{emoji}</div>
    {title}
</a>
