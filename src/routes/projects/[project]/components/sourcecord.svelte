<script lang="ts">
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Github from "@lucide/svelte/icons/github";
</script>

<div class="mt-3">
  <div class="grid grid-cols-2">
    <div class="text-start">
      <h1 class="text-4xl font-bold">Sourcecord</h1>
    </div>
    <div class="grid justify-end pr-10">
      <button
        class="hover:bg-accent rounded-full transition-all px-2.5 cursor-pointer"
        onclick={() => goto("https://github.com/SourcewareLab/Sourcecord")}
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
        <li>Wails + Svelte</li>
      </ol>
      <br />
      <br />
      <p class="md:pr-50">
        DevChat is a GitHub-integrated communication platform crafted for
        developers and teams who live in their commits, reviews, and issue
        threads. With repo-focused chat, PR/issue handling, GitHub Discussions
        access, and a personal DevDashboard — DevChat keeps your collaboration
        context-rich and productive.
      </p>
    </div>
    <h2 class="text-2xl font-bold pt-2">My Expectations</h2>
    <Separator class="my-3" />
    <div class="pl-4 pt-4 text-lg">
      <p class="md:pr-50">
        With my growing Repositories and the hunger to increase that more, I
        have found it difficult to communicate with people on Github, It would
        always require an alternate platform to interact with them. <br />
        This led to My Friends and I creating Sourcecord, a Developer centered chat
        application with github integration. This will allow you to interact with
        people, and also view/utilize github features, all from one app.
      </p>
    </div>
  </div>
</div>
