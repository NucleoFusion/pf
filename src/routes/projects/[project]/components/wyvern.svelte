<script lang="ts">
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Github from "@lucide/svelte/icons/github";
</script>

<div class="mt-3 mb-20">
  <div class="grid grid-cols-2">
    <div class="text-start">
      <h1 class="text-4xl font-bold">Wyvern</h1>
    </div>
    <div class="grid justify-end pr-10">
      <button
        class="hover:bg-accent rounded-full transition-all px-2.5 cursor-pointer"
        onclick={() => goto("https://github.com/NucleoFusion/Wyvern")}
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
        <li>Svelte</li>
      </ol>
      <br />
      <p class="md:pr-50"></p>
      Wyvern is a real-time chat and collaboration app built around GitHub repositories.
      It allows teams, contributors, and maintainers to communicate, manage, and
      work on projects — all in one place. GitHub Issues and Discussions are powerful,
      but they're not built for fast, fluid communication. Project members often
      end up using third-party tools like Slack or Discord — separating code from
      conversation.
    </div>
    <h2 class="text-2xl font-bold pt-2">My Experience</h2>
    <Separator class="my-3" />
    <div class="pl-4 pt-4 text-lg">
      <p class="md:pr-50">
        Wyvern is one of the projects I have most fun with, It's a big project
        with a lot of different things but what excites me most is the System
        Design aspect. Over the years of coding and building projects I have
        found the importance of the Architecture of a project and how it affects
        a project. All this showcases in Wyvern, my careful consideration for
        each part and mutiple iterations for each component.
        <br />
        <br />
        It is tough to make a project scalable from the get-go, especially for someone
        with little experience with this stuff, I had to spend hours researching
        what works and why, if it even fit my use case and how I could modify it
        for my app. But, it was fun! I got to learn the theory behind most major
        system architectures and also got to experience firsthand with some. My most
        proud moment was when I actually thought up the architecture for my Hub (Group)
        & Channel Managers and using what is called Actor Pattern (I think), although
        I didn't know at the time. It made me realize how far I'd come and was a
        testament to all that I'd learned from this.
        <br />
        <br />
        But, no project comes without its struggles. The biggest pain to me was setting
        up the frontend development environment, I went through several cross-platform
        frameworks, from Tauri to Neutralino I tried to make everything work but
        at the end, I stuck with creating custom applications for each platform (currently
        on web). This would ensure that the frontend is highly optimized for each
        platform providing efficiency to users.
      </p>
    </div>
  </div>
</div>
