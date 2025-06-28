<script lang="ts">
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Github from "@lucide/svelte/icons/github";
</script>

<div class="mt-3 mb-20">
  <div class="grid grid-cols-2">
    <div class="text-start">
      <h1 class="text-4xl font-bold">LapisOAuth</h1>
    </div>
    <div class="grid justify-end pr-10">
      <button
        class="hover:bg-accent rounded-full transition-all px-2.5 cursor-pointer"
        onclick={() => goto("https://github.com/NucleoFusion/lapisoauth")}
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
        <li>Go</li>
        <li>Redis</li>
        <li>PostgreSQL</li>
      </ol>
      <br />
      <br />
      <p class="md:pr-50">
        A minimal OAuth2 implementation with a clear separation between the
        Authorization Server and the Resource Server. Built for educational
        purposes and practical integration scenarios.
      </p>
    </div>
    <h2 class="text-2xl font-bold pt-2">My Experience</h2>
    <Separator class="my-3" />
    <div class="pl-4 pt-4 text-lg">
      <p class="md:pr-50">
        For a long time I was fascinated by how OAuth worked, Like, it was one
        of the things that kept me up at night. No matter how much I racked my
        brain, I could not find a way I could recreate even a crude version of
        the application.
        <br /><br />
        This was what inspired me to create this app, my inability to design it in
        my head. After reading a lot, even the RFC standards, it not only taught
        me how (it was just cookies all along), but also optimizations for security,
        for example, dividing the server's in two, having resource and auth servers
        seperate. Refreshing Refresh Token on creation of a new Access Token.
      </p>
    </div>
  </div>
  <p class="px-5 pt-3 text-lg md:pr-50"></p>
</div>
