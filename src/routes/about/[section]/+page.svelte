<script lang="ts">
  import { page } from "$app/stores";
  import Education from "./components/education.svelte";
  import Experience from "./components/experience.svelte";
  import Roadmap from "./components/roadmap.svelte";
  import Skills from "./components/skills.svelte";

  $: section = $page.params.section;
</script>

{#if section == "edu"}
  <Education />
{:else if section == "skills"}
  <Skills />
{:else if section == "roadmap"}
  <Roadmap />
{:else if section == "exp"}
  <Experience />
{/if}
