<script lang="ts">
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Github from "@lucide/svelte/icons/github";
</script>

<div class="mt-3">
  <div class="grid grid-cols-2">
    <div class="text-start">
      <h1 class="text-4xl font-bold">LapisChat</h1>
    </div>
    <div class="grid justify-end pr-10">
      <button
        class="hover:bg-accent rounded-full transition-all px-2.5 cursor-pointer"
        onclick={() => goto("https://github.com/NucleoFusion/lapischat")}
      >
        <Github size={20} />
      </button>
    </div>
  </div>
  <Separator class="my-3" />
  <div class="pl-4 pt-4">
    <h2 class="text-2xl font-bold">Stack & Description</h2>
    <Separator class="my-3" />
    <div class="pl-4 py-4 text-lg">
      <ol class="pl-4 list-disc">
        <li>Rust</li>
        <li>Tauri w/ Svelte</li>
        <li>Redis</li>
        <li>PostgreSQL</li>
      </ol>
      <br />
      <br />
      <p class="md:pr-50">
        LapisChat is a minimal, ephemeral chat application built with Rust and
        Tauri. It enables two users to connect in a temporary session, exchange
        messages in real-time, and leave without a trace. Once the session ends,
        all data is discarded — no history, no storage, no surveillance.
      </p>
    </div>
    <h2 class="text-2xl font-bold pt-2">My Expectations</h2>
    <Separator class="my-3" />
    <div class="pl-4 pt-4 text-lg">
      <p class="md:pr-50">
        LapisChat was driven by my curiosity to learn Rust and Websockets.
        Therefore I decided on a Chat app with a twist. Completely Anonymous.
      </p>
    </div>
  </div>
</div>
