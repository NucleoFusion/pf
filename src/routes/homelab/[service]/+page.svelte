<script lang="ts">
  import { page } from "$app/stores";
  import Path from "./components/path.svelte";
  import Containers from "./components/containers.svelte";
  import Monitoring from "./components/monitoring.svelte";
  import Harbor from "./components/harbor.svelte";

  $: dot = $page.params.service;
</script>

{#if dot == "path"}
  <Path />
{:else if dot == "containers"}
  <Containers />
{:else if dot == "monitoring"}
  <Monitoring />
{:else if dot == "harbor"}
  <Harbor />
{/if}
