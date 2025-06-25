<script lang="ts">
  import { page } from "$app/stores";
  import Niri from "./components/niri.svelte";
  import Ags from "./components/ags.svelte";
  import Lock from "./components/lock.svelte";
  import Nvim from "./components/nvim.svelte";
  import Term from "./components/term.svelte";
  import Firefox from "./components/firefox.svelte";

  $: dot = $page.params.dot;
</script>

{#if dot == "niri"}
  <Niri />
{:else if dot == "ags"}
  <Ags />
{:else if dot == "lock"}
  <Lock />
{:else if dot == "nvim"}
  <Nvim />
{:else if dot == "term"}
  <Term />
{:else if dot == "firefox"}
  <Firefox />
{/if}
