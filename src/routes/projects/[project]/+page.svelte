<script lang="ts">
  import { page } from "$app/stores";
  import Toney from "./components/toney.svelte";
  import Lapisoauth from "./components/lapisoauth.svelte";
  import D2d from "./components/d2d.svelte";
  import Glados from "./components/glados-bot.svelte";
  import Neo from "./components/neo.svelte";
  import Lapisblog from "./components/lapisblog.svelte";
  import Squeeldb from "./components/squeeldb.svelte";
  import Sos from "./components/sos.svelte";
  import Cruise from "./components/cruise.svelte";
  import Wyvern from "./components/wyvern.svelte";

  $: project = $page.params.project;
</script>

{#if project == "toney"}
  <Toney />
{:else if project == "lapisoauth"}
  <Lapisoauth />
{:else if project == "d2d"}
  <D2d />
{:else if project == "glados"}
  <Glados />
{:else if project == "neo"}
  <Neo />
{:else if project == "lapisblog"}
  <Lapisblog />
{:else if project == "squeel"}
  <Squeeldb />
{:else if project == "sos"}
  <Sos />
{:else if project == "wyvern"}
  <Wyvern />
{:else if project == "cruise"}
  <Cruise />
{/if}
