<script lang="ts">
  import Seperator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="w-[100vw] h-[100vh] sm:py-[30vh] sm:px-[25vw] grid items-center">
  <div class="grid container gap-5 items-center">
    <div class="justify-end text-end w-full">
      <h1 class="cursive text-4xl sm:text-5xl">Lakshit Singh</h1>
      <h4 class="text-base">
        aka <span class="font-bold text-xl">NucleoFusion</span>
      </h4>
    </div>
    <Seperator orientation="vertical" class="bg-foreground" />
    <div>
      <p>A Passionate Programmer</p>
    </div>
  </div>
</div>

<style>
  .container {
    grid-template-columns: 1fr auto 1fr;
  }
</style>
