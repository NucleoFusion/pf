<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet/index.ts";
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.ts";
  import ToggleTheme from "../toggleTheme/toggleTheme.svelte";
  import Github from "@lucide/svelte/icons/github";
  import Linkedin from "@lucide/svelte/icons/linkedin";
  import Mail from "@lucide/svelte/icons/mail";
  import FileUser from "@lucide/svelte/icons/file-user";
  import MyAvatar from "../my-avatar/myAvatar.svelte";
  import Icon from "@iconify/svelte";
  import House from "@lucide/svelte/icons/house";
  import SunIcon from "@lucide/svelte/icons/sun";
  import MoonIcon from "@lucide/svelte/icons/moon";
  import Menu from "@lucide/svelte/icons/menu";
  import { toggleMode } from "mode-watcher";
  import * as Popover from "../popover/index.ts";
  import Button from "../button/button.svelte";
</script>

<NavigationMenu.Root
  class="grid grid-cols-[auto_auto] grid-rows-1 w-full py-3 fixed z-10 bg-background"
>
  <NavigationMenu.List
    class="w-[80vw] sm:w-[50vw] gap-4 sm:gap-10 justify-start items-center px-5 sm:px-10"
  >
    <NavigationMenu.Item>
      <MyAvatar />
    </NavigationMenu.Item>
    <NavigationMenu.Item class="grid grid-cols-6 gap-2">
      <NavigationMenu.Link
        class="rounded-full cursor-pointer w-8 h-8 text-foreground hover:text-accent-foreground hover:bg-accent transition-colors duration-200"
        href="https://github.com/NucleoFusion"
      >
        <Github class="text-foreground" />
      </NavigationMenu.Link>
      <NavigationMenu.Link
        class="rounded-full  cursor-pointer w-8 h-8 bg-transparent text-foreground hover:text-accent-foreground hover:bg-accent transition-colors duration-200"
        href="https://www.linkedin.com/in/lakshit-singh-41583a287/"
      >
        <Linkedin class="text-foreground" />
      </NavigationMenu.Link>
      <NavigationMenu.Link
        class="rounded-full w-8 h-8  cursor-pointer bg-transparent text-foreground hover:text-accent-foreground hover:bg-accent transition-colors duration-200"
        href="https://dev.to/nucleofusion"
      >
        <Icon icon="mdi:dev-to" class="text-foreground" />
      </NavigationMenu.Link>
      <NavigationMenu.Link
        class="rounded-full w-8 h-8  cursor-pointer bg-transparent text-foreground hover:text-accent-foreground hover:bg-accent transition-colors duration-200"
        href="https://discord.com/users/345244222850334721"
      >
        <Icon icon="ic:baseline-discord" class="text-foreground" />
      </NavigationMenu.Link>
      <NavigationMenu.Link
        class="rounded-full w-8 h-8 bg-transparent cursor-pointer  text-foreground hover:text-accent-foreground hover:bg-accent transition-colors duration-200"
        href="mailto:lakshit.singh.mail@gmail.com"
      >
        <Mail class="text-foreground" />
      </NavigationMenu.Link>
      <NavigationMenu.Link
        class="rounded-full w-8 h-8 bg-transparent text-foreground cursor-pointer  hover:text-accent-foreground hover:bg-accent transition-colors duration-200"
        href="https://www.overleaf.com/download/project/68bd66c387d7ceb54fe19c01/build/19b4a339b23-852a11f45d3fe795/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-c3d-d-f-18nz&enable_pdf_caching=true&popupDownload=true"
      >
        <FileUser class="text-foreground" />
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  </NavigationMenu.List>
  <NavigationMenu.List
    class="w-[20vw] sm:w-[50vw] grid justify-end gap-3 px-5 sm:px-10 "
  >
    <div class="w-full hidden lg:flex justify-end items-center gap-1">
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/dots">
          <span class="hidden sm:inline"> Dotfiles </span>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/homelab">
          <span class="hidden sm:inline"> Homelab </span>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/projects">
          <span class="hidden sm:inline"> Projects </span>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/about">
          <span class="hidden sm:inline"> About </span>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/contact">
          <span class="hidden sm:inline"> Contact </span>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link onclick={toggleMode}>
          <SunIcon
            class="h-[1.2rem] w-[1.2rem] text-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <MoonIcon
            class="absolute h-[1.2rem] w-[1.2rem] text-foreground rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">Toggle theme</span>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">
          <House class="text-foreground" />
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </div>
    <div class="lg:hidden">
      <Popover.Root>
        <Popover.Trigger>
          <Menu />
        </Popover.Trigger>
        <Popover.Content class="mr-5 px-2 py-5 !h-auto max-h-screen rounded">
          <div class="grid grid-rows-7 gap-2">
            <Button
              href="/dots"
              class="bg-transparent text-foreground hover:bg-accent"
            >
              Dotfiles
            </Button>
            <Button
              href="/homelab"
              class="bg-transparent text-foreground hover:bg-accent"
            >
              Homelab
            </Button>

            <Button
              href="/projects"
              class="bg-transparent text-foreground hover:bg-accent"
            >
              Projects
            </Button>
            <Button
              href="/about"
              class="bg-transparent text-foreground hover:bg-accent"
            >
              About
            </Button>
            <Button
              href="/contact"
              class="bg-transparent text-foreground hover:bg-accent"
            >
              Contact
            </Button>
            <Button
              onclick={toggleMode}
              class="bg-transparent text-foreground hover:bg-accent"
            >
              <SunIcon
                class="h-[1.2rem] w-[1.2rem] text-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              />
              <MoonIcon
                class="absolute h-[1.2rem] w-[1.2rem] text-foreground rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
              <span class="sr-only">Toggle theme</span>
            </Button>
            <Button
              href="/"
              class="bg-transparent text-foreground hover:bg-accent"
            >
              <House class="text-foreground" />
            </Button>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  </NavigationMenu.List>
</NavigationMenu.Root>
