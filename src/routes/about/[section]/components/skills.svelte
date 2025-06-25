<script>
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Icon from "@iconify/svelte";
</script>

<div class="my-3 mb-20">
  <h1 class="text-4xl font-bold">Skills</h1>
  <Separator class="my-3" />
  <div class="pl-4 pt-4">
    <p class="pr-50">
      Its been a little over 3 years since I've started to explore Computer
      Science. From starting with Python & C++, and being completely clueless on
      how to use that knowledge to make applications, to actually being able to
      create applications and website in more than 5 languages and also
      understanding the different parts of an Application. The Journey has
      been...
      <span class="italic">interesting</span>, to say the least.
    </p>
    <div class="pt-10">
      <h2 class="font-bold text-2xl">Languages</h2>
      <Separator class="my-3" />
      <div class=" py-10 grid grid-cols-8 gap-[5vw] pl-20 pr-100">
        <Icon icon="lineicons:go" width="10vh" />
        <Icon icon="lineicons:typescript" width="10vh" />
        <Icon icon="devicon-plain:cplusplus" width="10vh" />
        <Icon icon="devicon-plain:csharp" width="10vh" />
        <Icon icon="lineicons:python" width="10vh" />
        <Icon icon="simple-icons:zig" width="10vh" />
        <Icon icon="simple-icons:rust" width="10vh" />
        <Icon icon="simple-icons:gnubash" width="10vh" />
      </div>
      <p class="pl-4 pr-50">
        Although I've touched all of these languages, Go, JS/TS & C# are the
        ones I write the most, be it for their speed (Go) or their ease of
        use(TS). Whereas C++ & Python laid my foundation and started me off,
        which, does not mean I am any less proficient in them.
        <br />
        <br />
        Zig and Rust are a little unique, they are modern languages, with exclusive
        features. For Zig it being comptime and how it expands on C's legacy with
        more modern features, Its interoperability with C helps a lot in this. Rust,
        however, is something unique in and of itself, it takes a path much less
        treaden, by limiting what a programmer can do with it, it creates a tight
        knit net with its compiler, which even new programmers wont be able to break.
        Both of these are something I aspire to get more familiar with.
      </p>
    </div>
    <div class="pt-10">
      <h2 class="font-bold text-2xl">Frameworks/Libraries & Databases</h2>
      <Separator class="my-3" />
      <div class=" py-10 grid grid-cols-7 gap-[5vw] pl-20 pr-100">
        <Icon icon="file-icons:svelte" width="10vh" />
        <Icon icon="simple-icons:react" width="10vh" />
        <Icon icon="mdi:angular" width="10vh" />
        <Icon icon="simple-icons:express" width="10vh" />
        <Icon icon="simple-icons:postgresql" width="10vh" />
        <Icon icon="lineicons:mongodb" width="10vh" />
        <Icon icon="devicon-plain:redis" width="10vh" />
      </div>
      <p class="pl-4 pr-50">
        To be honest, I'm not the best at designing and finding out what colors
        go with what, but, I can assure you that I absolutely enjoy building
        frontend apps, be that managing and handling complex data. Creating
        complex interactions, they are as interesting to me as backend or other
        fields are. Its just that, whenever I do build frontend, if I do not go
        by a predefined theme/scheme I end up making something good to me (as I
        dont have an eye for design) but looks subpar at best to others that are
        more proffesional.<br /><br /> Databases, however, are something that I'm
        really niche about, like figuring out what use case fits what database etc,
        to the extent that I actually did a course on how Database Systems are developed
        and how they work. Fun fact, this is one of the reason why I have used 3
        databases in my D2D application. Some use cases just dont fit sql.
      </p>
    </div>
    <div class="pt-10">
      <h2 class="font-bold text-2xl">My Development Environment</h2>
      <Separator class="my-3" />
      <div class=" py-10 grid grid-cols-3 gap-[5vw] pl-20 pr-100">
        <Icon icon="mdi:arch" width="10vh" />
        <Icon icon="devicon-plain:neovim" width="10vh" />
        <Icon icon="file-icons:tmux" width="10vh" />
      </div>
      <p class="pl-4 pr-50">
        My Development Environment consists mainly of two things only, my
        Operating System, where nothing can match Arch or Arch-based distros,
        and my Editor, Neovim, allowing me to go to speeds unimaginable to the
        old me. Even though I've only scratched the surface of their
        capabilities, I think i've become a better developer with the help of
        both.
        <br /><br />
        Another part of my environment that is engraving itself into me is Niri,
        for those less savvy with linux and window managers. It is a scrollable tiling
        manager, and it has been a game changer to say the least. The fact that I
        can have all my windows take full screen space, and have a seemingly unlimited
        number of workspaces is revolutionary. Add to the fact that all my windows
        are a keybind away from me. Since the change, I've started to use tmux less
        and less.
      </p>
    </div>
  </div>
</div>
