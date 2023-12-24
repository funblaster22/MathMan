<script lang="ts">
  import {getContext} from "svelte";
  import type {Writable} from "svelte/store";

  export let value: string;
  export let href: string;

  const renameEnabled = getContext<Writable<boolean>>("renameEnabled");
  let textArea: HTMLTextAreaElement;

  function resizeFit() {
    textArea.style.height = "";
    textArea.style.height = textArea.scrollHeight + "px";
  }

  $: {
    if (textArea)
      resizeFit();
  }
</script>

{#if $renameEnabled}
<textarea
    bind:this={textArea}
    on:input={resizeFit}
    on:change
    class="w-full text-center resize-none overflow-hidden"
    {value} />
{:else}
    <!-- TODO: should only 1 href be tabbable? Need to do more a11y testing -->
    <a {href}>{value}</a>
{/if}
