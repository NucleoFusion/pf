<script lang="ts">
  import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="mt-3 w-[84vw] mb-20">
  <h1 class="text-4xl font-bold">Niri</h1>
  <Separator class="my-3" />
  <div class="w-[50vw] pl-8 pt-4 grid justify-center items-center">
    <video preload="none" controls class="rounded">
      <source src="/niri.mp4" type="video/mp4" />
    </video>
  </div>
  <p class="px-5 pt-3 text-lg pr-50 pl-8 pt-10">
    Window Managers/Tiling Managers are an integral part of any Operating
    System, managing how your windows behave and how they communicate with it.
    <br /><br />
    Throughout my journey I've dabbled in a lot of WM's, being, KDE, Hyprland, River,
    Sway etc. But what stuck with me was Niri, A scrollable Tiling Window Manager.
    <br /><br />
    Niri allows me to have, what I like to call, workspaces<sup>2</sup>. Which
    means, that I can have an infinite number of workspaces, and also have an
    infinite number of windows in the workspaces, since that is what Niri is.
    And the best part is, everything is just a few keybinds away. Making me not
    have to mouse at all (I use vim btw!).
  </p>
</div>
