<script lang="ts">
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Github from "@lucide/svelte/icons/github";
</script>

<div class="mt-3">
  <div class="grid grid-cols-2">
    <div class="text-start">
      <h1 class="text-4xl font-bold">Katalogue</h1>
    </div>
    <div class="grid justify-end pr-10">
      <button
        class="hover:bg-accent rounded-full transition-all px-2.5 cursor-pointer"
        onclick={() => goto("https://github.com/SourcewareLab/katalogue")}
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
        <li>C#</li>
        <li>Angular</li>
      </ol>
      <br />
      <br />
      <p class="md:pr-50">
        Katalogue is a social platform to explore, manage, and share your
        favorite games, movies, books, and more. Build your personal collection,
        leave reviews and recommendations, discover new titles through your
        friends, and engage in meaningful conversations around the media you
        love. Whether you're a casual viewer or a passionate collector,
        Katalogue helps you track what you’ve experienced — and what’s next.
      </p>
    </div>
    <h2 class="text-2xl font-bold pt-2">My Expectations</h2>
    <Separator class="my-3" />
    <div class="pl-4 pt-4 text-lg">
      <p class="md:pr-50">
        Have you ever searched through Google, Reddit and other sites to find a
        suitable movie, game etc for you? I have. And thats why My Friend and I
        decided to create Katalogue. It is a platform to share your reviews, and
        recommendations with your friends or the public on Games, Movies, TV
        Shows and more!
      </p>
    </div>
  </div>
</div>
