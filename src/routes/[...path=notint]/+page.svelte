<script>
  import { page } from '$app/stores'
  import {onMount} from "svelte";

  $: console.log($page);
  
  onMount(() => {
    // TODO: remove
    window.newFile = () => {
      db.files.add({attempts: [{}], parent: null, route: []});
    }
  });
</script>

<div>You've reached dir!</div>
