<script lang="ts">
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Github from "@lucide/svelte/icons/github";
</script>

<div class="mt-3 mb-20">
  <div class="grid grid-cols-2">
    <div class="text-start">
      <h1 class="text-4xl font-bold">Cruise</h1>
    </div>
    <div class="grid justify-end pr-10">
      <button
        class="hover:bg-accent rounded-full transition-all px-2.5 cursor-pointer"
        onclick={() => goto("https://github.com/NucleoFusion/cruise")}
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
        <li>Docker</li>
      </ol>
      <br />
      <p class="md:pr-50">
        Cruise is a powerful, intuitive, and fully-featured TUI (Terminal User
        Interface) for interacting with Docker. Built with Go and
        <a href="https://github.com/charmbracelet/bubbletea">Bubbletea</a>, it
        offers a visually rich, mouse-less experience for managing containers,
        images, volumes, networks, Compose stacks, and more — all from your
        terminal.
      </p>
    </div>
    <h2 class="text-2xl font-bold pt-2">My Experience</h2>
    <Separator class="my-3" />
    <div class="pl-4 pt-4 text-lg">
      <p class="md:pr-50">
        From building Toney and using it, along with other TUI's daily I've come
        to appreciate the minimalism that TUI's offer. The fact that TUI's also
        make me live on the terminal, and have no need to open seperate more
        resource-hungry and confusiong GUI's is just another cherry on top.
        Armed with this knowledge and the frustration from the tedious docker
        CLI commands, that are not user-friendly. I planned to create Cruise.
        <br />
        <br />
        Some alternatives do exist such as lazydocker, but theres some faults with
        them that made me make something new. Firstly they do not look good, I am
        a man of customization and aesthetic looking applications, so something that
        is rigid and can't be fit into my desktop theme is a deal-breaker for me.
        Secondly, lazydocker offers alternative to only common interactions and doesn't
        make full use of the extensive interfaces that docker actually provides,
        it has a very limited set of interactions it can perform.
        <br />
        <br />
        As compared to Toney, I had a far easier time coding this project, armed
        with my knowledge of the bubbletea framework and also the lessons from building
        toney. What really stumped me was the UI/UX, you might think that for TUI's
        UI/UX is limited and easy to make, but the fact is, when you want to pack
        4 different components with multiple different interactions, that too with
        the limitations of TUI's, it gets very hard to build something that has the
        same ease of use a GUI altenative might have. In the end though, I beleive
        to have done a decent job creating and managing the UI.
        <br />
        <br />
        I am still only in the early stages of building it, and I am sure that many
        problems will occur, but I am having fun building it and understanding docker
        and thats what matters.
      </p>
    </div>
  </div>
</div>
