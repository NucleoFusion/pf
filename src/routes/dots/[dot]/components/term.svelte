<script lang="ts">
  import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="mt-3 w-[84vw] mb-20">
  <h1 class="text-4xl font-bold">Terminal</h1>
  <Separator class="my-3" />
  <div class="w-[50vw] pl-8 pt-4 grid justify-center items-center">
    <video preload="none" controls class="rounded">
      <source src="/term.mp4" type="video/mp4" />
    </video>
  </div>
  <p class="px-5 pt-3 text-lg pr-50 pl-8 pt-10">
    The terminal is where I spent about 90% of my life, either its editing, or
    debuggin, or running applications. The terminal is a big part of my dev
    flow, and that is one of the most prominent reason I try to develop terminal
    native applications so that I can officially live 100% on the terminal.
    <br /><br />
    My terminal config consists of multiple parts, that are, Zsh(shell), Ghostty(Terminal
    Emulator), Tmux(Terminal Multiplexor), Oh-my-posh(Shell Prompt) etc.
  </p>
</div>
