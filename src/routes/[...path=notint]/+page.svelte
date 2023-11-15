<script>
  import { page } from '$app/stores'
  import {onMount} from "svelte";
  import {db} from "$lib/db";

  $: console.log($page);

  onMount(() => {
    // TODO: remove
    window.newFile = (...route) => {
      if (route.length < 1) {
        console.error("Need at least filename")
        return;
      }
      db.files.add({attempts: [{}], parent: route.at(-2) ?? "", route: ["", ...route]});
    }
  });
</script>

<div>You've reached dir!</div>
