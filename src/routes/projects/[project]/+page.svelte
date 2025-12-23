<script lang="ts">
  import { page } from "$app/stores";
  import Toney from "./components/toney.svelte";
  import Cruise from "./components/cruise.svelte";

  $: project = $page.params.project;
</script>

{#if project == "toney"}
  <Toney />
{:else if project == "cruise"}
  <Cruise />
{/if}
