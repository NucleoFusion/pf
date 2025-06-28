<script lang="ts">
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Github from "@lucide/svelte/icons/github";
</script>

<div class="mt-3">
  <div class="grid grid-cols-2">
    <div class="text-start">
      <h1 class="text-4xl font-bold">LapisBlog</h1>
    </div>
    <div class="grid justify-end pr-10">
      <button
        class="hover:bg-accent rounded-full transition-all px-2.5 cursor-pointer"
        onclick={() => goto("https://github.com/NucleoFusion/lapisblog")}
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
        <li>PostgreSQL</li>
      </ol>
      <br />
      <br />
      <p class="md:pr-50">
        LapisBlog is a modern, community-driven discussion platform where users
        can create posts, share thoughts, and engage in topic-based
        conversations. Designed with a focus on simplicity and usability,
        LapisBlog lets you discover and participate in communities that matter
        to you.
      </p>
    </div>
    <h2 class="text-2xl font-bold pt-2">My Experience</h2>
    <Separator class="my-3" />
    <div class="pl-4 pt-4 text-lg">
      <p class="md:pr-50">
        LapisBlog was my first large project with Go involving multiple routes
        and endpoints. The reason why its in Hiatus right now is the fact that
        due to my exams, I had to put off work on this, and as soon as I came
        back, I found projects that people were working on already, and I wanted
        to join them. <br /><br />
        Coding with other people is a lot more fun than solo dev. But I do intend
        to complete this project. This is the project that taught me how to manage
        large structures in Go and dividing up code into Mux's (Similar to ExpressJS
        Router).
      </p>
    </div>
  </div>
  <p class="px-5 pt-3 text-lg md:pr-50"></p>
</div>
