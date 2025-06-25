<script lang="ts">
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Icon from "@iconify/svelte";
</script>

<div class="mt-3">
  <h1 class="text-4xl font-bold">Introduction</h1>
  <Separator class="my-3" />
  <p class="px-5 pt-3 text-lg pr-50">
    Hi! My name is Lakshit Singh, also known as NucleoFusion. I am a developer
    curiously exploring the realm of Computer Science. I currently specialize in
    building Backend / Systems Solutions for complex problems in everyday life.
    <br />
    <br />
    Although I specialize in building Backend / Systems applications, I have explored
    a wide range of areas, from Frontend to DevOps having indulged in both. This
    has helped me gain a tinge of adaptability, being able to understand why things
    are.
    <br />
    <br />
    My goal is simply to learn as much as I can about the myriads of fields of Computer
    Science, building experience and excitement in whatever I do. Currently I am
    diving into the world of Linux App development learning more about how Linux
    IPC works, the various parts of a desktop application. And gaining hands-on practice
    with Gtk and/or Qt.
    <br />
    <br />
    Whenever im not building apps or learning, I'm probably listening to music, playing
    the Guitar or reading some of the greatest books. I enjoy a wide range of music
    but my top songs remain to be from <span class="italic">Ren Gill</span> or
    <span class="italic">The Poor Man's Poison</span>. My favorite book?
    <span class="italic">Absolute Resonance by Heavenly Silkworm Potato</span>.
    A rogue one, I know.
  </p>
  <div
    class="w-full h-[40vh] grid grid-cols-4 px-30 text-center items-center justify-center"
  >
    <div>
      <Icon icon="file-icons:arch-linux" height="15vh" />
    </div>
    <div>
      <Icon icon="simple-icons:neovim" height="15vh" />
    </div>
    <div>
      <Icon icon="wpf:guitar" height="15vh" />
    </div>
    <div>
      <Icon icon="famicons:book" height="15vh" />
    </div>
  </div>
</div>
