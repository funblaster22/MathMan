<script lang="ts">
  import {db} from "$lib/db";
  import path from "path";
  import {page} from "$app/stores";
  import {base} from "$app/paths";
  import IconFile from "./IconFile.svelte";
  import FileTitle from "./FileTitle.svelte";

  export let folder: string;

  function renameFolder(ev: Event) {
    db.files.where("route").startsWith(path.join($page.params.path, folder)).modify(file => {
      const routeArr = file.route.split("/")
      routeArr[$page.data.path.length - 1] = (ev.target as HTMLTextAreaElement).value;
      file.route = routeArr.join("/");
    });
  }
</script>

<IconFile href={folder} emoji="📁">
    <!-- TODO: make extendCwd func using this implementation -->
    <FileTitle
            href={path.join($page.data.path.at(-1) || base, folder)}
            value={folder}
            on:change={renameFolder} />
</IconFile>
