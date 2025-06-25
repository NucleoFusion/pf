<script lang="ts">
  import Seperator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="w-[100vw] h-[100vh] py-[30vh] px-[25vw] grid items-center">
  <div class="grid container gap-5 items-center w-[50vw]">
    <div class="justify-end text-end w-full">
      <h1 class="cursive text-5xl">Lakshit Singh</h1>
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
