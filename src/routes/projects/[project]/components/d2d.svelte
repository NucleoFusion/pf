<script lang="ts">
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Github from "@lucide/svelte/icons/github";
</script>

<div class="mt-3 mb-20">
  <div class="grid grid-cols-2">
    <div class="text-start">
      <h1 class="text-4xl font-bold">D2D</h1>
    </div>
    <div class="grid justify-end pr-10">
      <button
        class="hover:bg-accent rounded-full transition-all px-2.5 cursor-pointer"
        onclick={() => goto("https://github.com/NucleoFusion/d2d")}
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
        <li>Typescript + Express</li>
        <li>Svelte</li>
        <li>PostgreSQL</li>
        <li>Valkey (redis)</li>
        <li>MongoDB</li>
      </ol>
      <br />
      <br />
      <p class="md:pr-50">
        D2D is an open-source platform that bridges the gap between designers
        and developers. It enables members to connect, collaborate, and support
        each other by posting help requests, sharing knowledge, and engaging in
        topic-based discussions. Whether you're looking for feedback, a
        collaborator, or answers to a tricky problem, D2D is built to foster a
        supportive and creative community.
      </p>
    </div>
    <h2 class="text-2xl font-bold pt-2">My Experience</h2>
    <Separator class="my-3" />
    <div class="pl-4 pt-4 text-lg">
      <p class="md:pr-50">
        <!-- My Experience, a very large and complex application. Use case of each -->
        <!-- thing. -->
        D2D, is my first really really large project. It was built when my Friends
        and I noticed how it was not just us who struggled with designing stuff for
        our apps. And so, we thought of D2D, a way to connect Developers and Designers,
        so that they can benefit off of each other.
        <br />
        <br />
        D2D, is a very large project with a complex design requiring multiple tough
        system design choices. And due to these choices, you may see that we are
        using 3 Databases. The hardest part for this project yet was to figure out
        its system design.<br />
        Justifying each of my design choices, Redis was used for authentication,
        since it provided a faster alternative for smaller data. And the fact that
        it has inbuilt expiry system, thats just another perk. SQL, is well.... SQL,
        only the best way to manage large complex database structures easily through
        relationships, so it was a no brainer for most of the cases. But, there is
        somewhere it does not shine, that is for recursive comments. <br /><br
        />
        See for recursive comments, I would have to keep a large comments table that
        keeps all the comments as `id;parent_id;comment_data`. This would make searching
        and showing comments very expensive, since we'll have to recursively sort
        for each comment/post.<br />
        Here comes MongoDB, instead of having to sort recursively, I can just store
        all comments of a post in a large JSON Format, this would allow me faster
        responses.
      </p>
    </div>
  </div>
  <p class="px-5 pt-3 text-lg md:pr-50"></p>
</div>
