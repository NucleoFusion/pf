<script lang="ts">
  import { page } from "$app/stores";
  import Path from "./components/path.svelte";
  import Containers from "./components/containers.svelte";

  $: dot = $page.params.service;
</script>

{#if dot == "path"}
  <Path />
{:else if dot == "containers"}
  <Containers />
{/if}
