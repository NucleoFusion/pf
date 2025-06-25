<script lang="ts">
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Github from "@lucide/svelte/icons/github";
</script>

<div class="mt-3 mb-20">
  <div class="grid grid-cols-2">
    <div class="text-start">
      <h1 class="text-4xl font-bold">GlaDOS Bot</h1>
    </div>
    <div class="grid justify-end pr-10">
      <button
        class="hover:bg-accent rounded-full transition-all px-2.5 cursor-pointer"
        onclick={() => goto("https://github.com/SourcewareLab/GlaDOS-bot")}
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
        <li>Typescript</li>
        <li>Discord.js</li>
        <li>PostgreSQL</li>
      </ol>
      <br />
      <br />
      <p class="pr-50">
        The GlaDOS Community Bot is a powerful administration tool designed to
        streamline server management and enhance the community experience. Built
        with Node.js and Discord.js, it provides robust functionality for both
        moderators and members, focusing on efficient server management and
        community engagement.
      </p>
    </div>
    <h2 class="text-2xl font-bold pt-2">My Experience</h2>
    <Separator class="my-3" />
    <div class="pl-4 pt-4 text-lg">
      <p class="pr-50">
        GladOS Bot is a special project to me. It was the first project I
        participated in for my community, and learnt a lot. GlaDOS introduced me
        to how production level code was handled, how github repo's with
        multiple contributors should manage itself, and also what best practices
        I should follow to allow others to understand what I write.
        <br /><br />
        With it arose a lot of problems, forcing myself to change, but the best of
        all was, that I found friends with a similar mindset as me, that were willing
        to help we with any and all problems. Teaching me stuff I did'nt know, having
        discussions on latest topics etc. This was by far, the project I had most
        fun on, not because of the project, but the people.
      </p>
    </div>
  </div>
  <p class="px-5 pt-3 text-lg pr-50"></p>
</div>
