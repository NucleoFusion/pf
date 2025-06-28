<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.ts";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  let isLoading = $state(true);
</script>

<div class="mt-3 w-[84vw] mb-20">
  <h1 class="text-4xl font-bold">Introduction</h1>
  <Separator class="my-3" />
  <div
    class="pl-8 pt-4 text-lg grid gap-10 grid-cols-2 justify-center items-center md:pr-50"
  >
    <div>
      <img
        src="https://github-readme-stats.vercel.app/api?username=NucleoFusion&show_icons=true&bg_color=0d0d0d&title_color=ffffff&text_color=ffffff&icon_color=fffffff8&border_color=27272a"
        alt="GitHub Stats"
        class="rounded h-[25vh]"
      />
    </div>
    <div>
      {#if isLoading}
        <Skeleton class="h-full w-full" />
      {/if}
      <img
        src="https://github-readme-streak-stats.herokuapp.com/?user=NucleoFusion&theme=dark&background=0d0d0d&ring=fffffff8&currStreakLabel=ffffff&fire=ffffff"
        alt="GitHub Streak"
        class="rounded h-[25vh]"
        onload={() => (isLoading = false)}
        class:invisible={isLoading}
      />
    </div>
    <div class="col-span-2 grid justify-center items-center">
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=NucleoFusion&exclude_repo=dotflyes&bg_color=0d0d0d&title_color=ffffff&text_color=ffffff&icon_color=fffffff8&border_color=27272a"
        alt="Top Languages"
        class="rounded inline w-[25vw] col-span-full"
      />
    </div>
  </div>
  <p class="px-5 pt-3 text-lg md:pr-50 pl-8 pt-10">
    I have been contributing to Open Source projects, mainly those that were
    started by the Community I'm a part of, such as GladOS Bot, which was one of
    the most prominent ones. But right now, I have a vision for Toney, and the
    other projects I'm thinking of doing.
    <br />
    For a lot of time I've built projects not with their use in mind, but what they
    teach me, what I learn from them. And after building a lot of applications from
    different areas. I have now begun to create projects that are of use to me and
    to other people. I build these projects when I find there to be something lacking
    in Others. Take, for example, Toney, I built toney because I could not find a
    suitable note-taking app that could reside in the terminal, instead of having
    to open a larger and slower application. And therefore, I created Toney.
    <br /><br />
    Going forwards Ive decided to have a balance between learning projects and useful
    projects. For example, SqueelDB & LapisChat are for learning Database Systems
    and WebSockets respectively. Whereas, Sourcecord, is something that I thing would
    be a useful project, allowing people to manage and communicate within repositories
    nicely. Saving me from the difficulty of communicating fastly in Github.
  </p>
</div>
