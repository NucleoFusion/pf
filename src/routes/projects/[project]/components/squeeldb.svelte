<script lang="ts">
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Github from "@lucide/svelte/icons/github";
</script>

<div class="mt-3">
  <div class="grid grid-cols-2">
    <div class="text-start">
      <h1 class="text-4xl font-bold">SqueelDB</h1>
    </div>
    <div class="grid justify-end pr-10">
      <button
        class="hover:bg-accent rounded-full transition-all px-2.5 cursor-pointer"
        onclick={() => goto("https://github.com/NucleoFusion/squeelDB")}
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
        <li>Zig</li>
      </ol>
      <br />
      <br />
      <p class="pr-50">
        SqueelDB is a lightweight, blazing-fast, in-memory key-value database
        built using Zig. Inspired by the simplicity and performance of Redis,
        SqueelDB is designed for developers who want fine control and minimal
        overhead in data storage systems.
      </p>
    </div>
    <h2 class="text-2xl font-bold pt-2">My Expectations</h2>
    <Separator class="my-3" />
    <div class="pl-4 pt-4 text-lg">
      <p class="pr-50">
        SqueelDB is one of my planned projects I am most looking forward both
        due to it being on one of my favorite topics of Databases, and also the
        fact I get to actually build Something in Zig. With this project I aim
        to understand how database systems work, and by expanding this to create
        an interface/bindings for languages, I will also understand what goes on
        beneath the surface whenever I use a Database Binding for a language.
      </p>
    </div>
  </div>
  <p class="px-5 pt-3 text-lg pr-50"></p>
</div>
