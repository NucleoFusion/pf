<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.ts";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.ts";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import Button from "$lib/components/ui/button/button.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import * as Sheet from "$lib/components/ui/sheet/index.ts";
  import Menu from "@lucide/svelte/icons/menu";

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
    highlighted: [
      {
        title: "Toney",
        link: "/projects/toney",
        abb: "toney",
      },
      {
        title: "LapisOAuth",
        link: "/projects/lapisoauth",
        abb: "lapisoauth",
      },
      {
        title: "D2D",
        link: "/projects/d2d",
        abb: "d2d",
      },
      {
        title: "GladOS Bot",
        link: "/projects/glados",
        abb: "glados",
      },
    ],
    archived: [
      {
        title: "Neo",
        link: "/projects/neo",
        abb: "neo",
      },
      {
        title: "LapisBlog",
        link: "/projects/lapisblog",
        abb: "lapisblog",
      },
    ],
    planned: [
      {
        title: "SqueelDB",
        link: "/projects/squeel",
        abb: "squeel",
      },
      {
        title: "Katalogue",
        link: "/projects/katalogue",
        abb: "katalogue",
      },
      {
        title: "LapisChat",
        link: "/projects/lapischat",
        abb: "lapischat",
      },
      {
        title: "Sourcecord",
        link: "/projects/sourcecord",
        abb: "sourcecord",
      },
      {
        title: "SOS",
        link: "/projects/sos",
        abb: "sos",
      },
    ],
  };

  let isOpen = $state(true);
  let selected: Item = $state(
    items.highlighted.filter(
      (item) => item.abb == $page.url.pathname.split("/").filter(Boolean).pop(),
    )[0] ||
      items.archived.filter(
        (item) =>
          item.abb == $page.url.pathname.split("/").filter(Boolean).pop(),
      )[0] ||
      items.planned.filter(
        (item) =>
          item.abb == $page.url.pathname.split("/").filter(Boolean).pop(),
      )[0] || {
        title: "Introduction",
        abb: "",
        link: "/projects",
      },
  );

  function redirectTo(item: any) {
    selected = item;
    goto(item.link);
  }

  let { children } = $props();
</script>

<Sidebar.Provider bind:open={isOpen} class="pt-15 hidden md:flex ">
  <Sidebar.Root class="mt-15 border-transparent " collapsible="icon">
    <Sidebar.Header>
      <Sidebar.Menu>
        <Sidebar.MenuItem class="relative">
          <Sidebar.Trigger class="absolute text-center" />
          {#if isOpen}
            <h1 in:fade={fadeIn} class="text-xl w-full pl-10">My Projects</h1>
          {/if}
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Header>
    <Sidebar.Content>
      {#if isOpen}
        <div in:fade={fadeIn}>
          {#key selected}
            <Sidebar.Group>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton
                    class={`${selected.abb == "" ? "bg-muted text-foreground" : ""}`}
                    onclick={() =>
                      redirectTo({
                        abb: "",
                        title: "Introduction",
                        link: "/projects",
                      })}>Introduction</Sidebar.MenuButton
                  >
                </Sidebar.MenuItem>
              </Sidebar.Menu>
            </Sidebar.Group>
            <Sidebar.Group>
              <Sidebar.GroupLabel class="text-md"
                >Highlighted</Sidebar.GroupLabel
              >
              <Sidebar.GroupContent>
                <Sidebar.Menu class="pl-2 pt-2">
                  {#each items.highlighted as item}
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
              <Sidebar.GroupLabel class="text-md">Planned</Sidebar.GroupLabel>
              <Sidebar.GroupContent>
                <Sidebar.Menu class="pl-2 pt-2">
                  {#each items.planned as item}
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
              <Sidebar.GroupLabel class="text-md">Hiatus</Sidebar.GroupLabel>
              <Sidebar.GroupContent>
                <Sidebar.Menu class="pl-2 pt-2">
                  {#each items.archived as item}
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
          <Breadcrumb.Link href="/projects">Projects</Breadcrumb.Link>
        </Breadcrumb.Item>
        {#if selected}
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href={selected.link}
              >{selected.title}</Breadcrumb.Link
            >
          </Breadcrumb.Item>
        {/if}
      </Breadcrumb.List>
    </Breadcrumb.Root>
    {@render children()}
  </main>
</Sidebar.Provider>

<div class="md:hidden pt-15">
  <Sheet.Root>
    <Sheet.Content side="left" class="md:hidden py-5 px-2">
      <div class="text-xl font-bold">
        <h1 in:fade={fadeIn} class="text-2xl w-full pl-10">My Projects</h1>
      </div>
      <Separator />
      {#if isOpen}
        <div in:fade={fadeIn}>
          {#key selected}
            <div class="my-3 px-5">
              <div class="mt-5 pl-2 pt-2 grid grid-rows gap-3">
                <div class="grid grid-cols-1 justify-center items-center">
                  <Button
                    class={`text-foreground bg-transparent hover:bg-accent ${`${selected.abb == "" ? "bg-muted text-foreground" : ""}`}`}
                    onclick={() =>
                      redirectTo({
                        abb: "",
                        title: "Introduction",
                        link: "/projects",
                      })}>Introduction</Button
                  >
                </div>
              </div>
            </div>
            <div class="my-3 px-5">
              <h2 class="text-md font-bold text-xl text-muted-accent">
                Highlighted
              </h2>
              <div class="mt-5 pl-2 pt-2 grid grid-rows gap-3">
                {#each items.highlighted as item}
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
                Planned
              </h2>
              <div class="mt-5 pl-2 pt-2 grid grid-rows gap-3">
                {#each items.planned as item}
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
                Archived
              </h2>
              <div class="mt-5 pl-2 pt-2 grid grid-rows gap-3">
                {#each items.archived as item}
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
