<script lang="ts">
  import {goto} from "$app/navigation";

  function changeQuestion(ev: Event) {
    goto("4")
  }
</script>

<button>🚩</button>
<select on:change={changeQuestion}>
    <option>Notes</option>
    <option>Question 1</option>
</select>
<button>➡️</button>
