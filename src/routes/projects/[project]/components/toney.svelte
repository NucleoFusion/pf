<script lang="ts">
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Github from "@lucide/svelte/icons/github";
</script>

<div class="mt-3 mb-20">
  <div class="grid grid-cols-2">
    <div class="text-start">
      <h1 class="text-4xl font-bold">Toney</h1>
    </div>
    <div class="grid justify-end pr-10">
      <button
        class="hover:bg-accent rounded-full transition-all px-2.5 cursor-pointer"
        onclick={() => goto("https://github.com/SourcewareLab/Toney")}
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
        <li>Bubbletea</li>
      </ol>
      <br />
      <p class="pr-50">
        Toney is a fast, lightweight, terminal-based note-taking app for the
        modern developer. Built with Bubbletea, Toney brings a sleek TUI
        interface with markdown rendering, file navigation, and native Neovim
        editing – all in your terminal.
      </p>
    </div>
    <h2 class="text-2xl font-bold pt-2">My Experience</h2>
    <Separator class="my-3" />
    <div class="pl-4 pt-4 text-lg">
      <p class="pr-50">
        Toney is a unique project for me, its something that I developed for my
        daily use because I am very forgetful, I like to be able to write down
        my thoughts and my plans. And since there was no good note-taking app I
        could find that was satisfying needs, I decided to develop one myself.
        That being Toney.
        <br />
        <br />
        Ultimately after much deliberation I decided on making it a Text-based User
        Interface (TUI) since that would integrate well into my Development Environment
        (I use nvim btw!) since I live in the terminal. And, what better language
        than Go for a Terminal App? not to mention the great work of the
        <a href="https://charm.sh/" class="underline">Charm</a>
        team in creating a full library/framework for creating TUI's leveraging Go's
        features.
        <br />
        <br />
        But, no project comes without its struggles. It may be my terminal emulator
        (<a href="https://ghostty.org/" class="underline">ghostty</a>), but the
        markdown renderer I was using was taking up a lot of cpu time to create
        itself. Hence, I had to spend days trying to mess about and find a way
        to do that asynchronously. The problem with this was, that whenever a
        goroutine is created, some context is also passed to it, and that
        context, due to some workings of Bubbletea(TUI Framework), would not
        allow me to update the Model state from inside the goroutine.
        <br />
        After spending hours, I finally figured out how to execute that as a goroutine
        and still update state. Since, this was being done asynchronously, I needed
        to integrate a loading screen at the start of the app.
        <br />
        <br />
        Unfortunately the problems don't end here. While researching for ways to
        include a spinner/loader I happened to remember that Bubbles (Component Library
        for Bubbletea) had a Spinner component. The problem? That spinner constantly
        took up the cpu time, since the way it was structured it would keep updating
        its state at times. While this is fine 80% of the time, the actual problem
        arises when the cpu is under load, at that time, Go does not have any other
        cores/threads free, making the app keep updating its state (due to spinner)
        and the Async task to try to frantically look for cpu time, making it very
        slow under these special cases. <br /> It gets worse, I have yet to find
        a suitable method for this, the only methods right now being, make the loading
        screen be a static one, instead of re-updating. Or create myself a markdown
        renderer (which I do plan to do anyway for this).
      </p>
    </div>
  </div>
</div>
