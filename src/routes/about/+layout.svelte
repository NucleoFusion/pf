<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.ts";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.ts";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import * as Sheet from "$lib/components/ui/sheet/index.ts";
  import Menu from "@lucide/svelte/icons/menu";
  import Button from "$lib/components/ui/button/button.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";

  interface Item {
    link: string;
    title: string;
    abb: string;
  }

  let fadeIn = {
    duration: 200,
    delay: 200,
  };
  let items = {
    professional: [
      {
        title: "Introduction",
        link: "/about",
        abb: "about",
      },
      {
        title: "Experience",
        link: "/about/exp",
        abb: "exp",
      },
      {
        title: "Skills",
        link: "/about/skills",
        abb: "skills",
      },
      {
        title: "Education",
        link: "/about/edu",
        abb: "edu",
      },
    ],
    personal: [
      {
        title: "My Roadmap",
        link: "/about/roadmap",
        abb: "roadmap",
      },
    ],
  };

  let isOpen = $state(true);
  let selected: Item = $state(
    items.professional.filter(
      (item) => item.abb == $page.url.pathname.split("/").filter(Boolean).pop(),
    )[0] ||
      items.personal.filter(
        (item) =>
          item.abb == $page.url.pathname.split("/").filter(Boolean).pop(),
      )[0],
  );

  function redirectTo(item: any) {
    selected = item;
    goto(item.link);
  }

  let { children } = $props();
</script>

<Sidebar.Provider bind:open={isOpen} class="hidden md:flex pt-15">
  <Sidebar.Root class="mt-15 border-transparent z-10" collapsible="icon">
    <Sidebar.Header>
      <Sidebar.Menu>
        <Sidebar.MenuItem class="relative">
          <Sidebar.Trigger class="absolute text-center" />
          {#if isOpen}
            <h1 in:fade={fadeIn} class="text-xl w-full pl-10">About Me</h1>
          {/if}
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Header>
    <Sidebar.Content>
      {#if isOpen}
        <div in:fade={fadeIn}>
          {#key selected}
            <Sidebar.Group>
              <Sidebar.GroupLabel class="text-md"
                >Professional</Sidebar.GroupLabel
              >
              <Sidebar.GroupContent>
                <Sidebar.Menu class="pl-2 pt-2">
                  {#each items.professional as item}
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton
                        class={`${item.abb == selected.abb ? "bg-muted text-foreground" : ""}`}
                        onclick={() => redirectTo(item)}
                        >{item.title}</Sidebar.MenuButton
                      >
                    </Sidebar.MenuItem>
                  {/each}
                </Sidebar.Menu>
              </Sidebar.GroupContent>
            </Sidebar.Group>
            <Sidebar.Group>
              <Sidebar.GroupLabel class="text-md">Personal</Sidebar.GroupLabel>
              <Sidebar.GroupContent>
                <Sidebar.Menu class="pl-2 pt-2">
                  {#each items.personal as item}
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton
                        class={`${item.abb == selected.abb ? "bg-muted text-foreground" : ""}`}
                        onclick={() => redirectTo(item)}
                        >{item.title}</Sidebar.MenuButton
                      >
                    </Sidebar.MenuItem>
                  {/each}
                </Sidebar.Menu>
              </Sidebar.GroupContent>
            </Sidebar.Group>
          {/key}
        </div>
      {/if}
    </Sidebar.Content>
  </Sidebar.Root>
  <main class="px-4">
    <Breadcrumb.Root class="pb-2">
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/about">About</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href={selected.link}
            >{selected.title}</Breadcrumb.Link
          >
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
    {@render children()}
  </main>
</Sidebar.Provider>

<div class="md:hidden pt-15">
  <Sheet.Root>
    <Sheet.Content side="left" class="md:hidden py-5 px-2">
      <div class="text-xl font-bold">
        <h1 in:fade={fadeIn} class="text-2xl w-full pl-10">About Me</h1>
      </div>
      <Separator />
      {#if isOpen}
        <div in:fade={fadeIn}>
          {#key selected}
            <div class="my-3 px-5">
              <h2 class="text-md font-bold text-xl text-muted-accent">
                Professional
              </h2>
              <div class="mt-5 pl-2 pt-2 grid grid-rows gap-3">
                {#each items.professional as item}
                  <div class="grid grid-cols-1 justify-center items-center">
                    <Button
                      class={`text-foreground bg-transparent hover:bg-accent ${`${item.abb == selected.abb ? "bg-muted text-foreground" : ""}`}`}
                      onclick={() => redirectTo(item)}>{item.title}</Button
                    >
                  </div>
                {/each}
              </div>
            </div>
            <Separator />
            <div class="my-5 px-5">
              <h2 class="text-md font-bold text-xl text-muted-accent">
                Personal
              </h2>
              <div class="mt-5 pl-2 pt-2 grid grid-rows gap-3">
                {#each items.personal as item}
                  <div class="grid grid-cols-1 justify-center items-center">
                    <Button
                      class={`text-foreground bg-transparent hover:bg-accent ${`${item.abb == selected.abb ? "bg-muted text-foreground" : ""}`}`}
                      onclick={() => redirectTo(item)}>{item.title}</Button
                    >
                  </div>
                {/each}
              </div>
            </div>
          {/key}
        </div>
      {/if}
    </Sheet.Content>

    <main class="px-4">
      <div class="flex gap-3">
        <Sheet.Trigger>
          <Menu />
        </Sheet.Trigger>
        <Breadcrumb.Root class="pt-0.5">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/about">About</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href={selected.link}
                >{selected.title}</Breadcrumb.Link
              >
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>
      {@render children()}
    </main>
  </Sheet.Root>
</div>
