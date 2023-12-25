<script lang="ts">
  import {db} from "$lib/db";
  import * as path from "$lib/path";
  import {page} from "$app/stores";
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
    <FileTitle
            href={path.extendCwd($page, folder)}
            value={folder}
            on:change={renameFolder} />
</IconFile>
