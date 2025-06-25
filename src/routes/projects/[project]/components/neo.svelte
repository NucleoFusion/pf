<script lang="ts">
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Github from "@lucide/svelte/icons/github";
</script>

<div class="mt-3">
  <div class="grid grid-cols-2">
    <div class="text-start">
      <h1 class="text-4xl font-bold">Neo</h1>
    </div>
    <div class="grid justify-end pr-10">
      <button
        class="hover:bg-accent rounded-full transition-all px-2.5 cursor-pointer"
        onclick={() => goto("https://github.com/SourcewareLab/Neo")}
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
      </ol>
      <br />
      <br />
      <p class="pr-50">
        Neo is a blazingly fast programming language with a focus on performance
        and seamless C interoperability. Built with Go, its compiler translates
        Neo code directly to highly optimized C, enabling efficient execution
        with minimal overhead. Designed for speed and flexibility, Neo empowers
        developers to write modern, expressive code while leveraging the power
        of C’s ecosystem.
      </p>
    </div>
    <h2 class="text-2xl font-bold pt-2">My Experience</h2>
    <Separator class="my-3" />
    <div class="pl-4 pt-4 text-lg">
      <p class="pr-50">
        <!-- My Experience, what i wanted, and why Go was not it. -->
        Since the dawn of python (when I started learning it), I often wondered about
        how I was able to create stuff with code. How code was able to tell the cpu
        what to do and How to do. The farther I went on my journey the more accustomed
        I became to syntax and what goes on with the cpu, but I never really understood
        how the code I wrote was converted to Machine Code. How it was broken down
        and rebuilt in another form.
        <br /><br />
        Neo is meant to make My Friends and I understand how languages work. But,
        to be completely honest, Go was not a good choice for this. Go is not Object
        Oriented, while this does not affect much at all, it is sometimes more lines
        for some stuff. But the worst of all was the lack of enums, and how I had
        to personally emulate them. <br /><br />
        But nothing easy is fun.
      </p>
    </div>
  </div>
  <p class="px-5 pt-3 text-lg pr-50"></p>
</div>
