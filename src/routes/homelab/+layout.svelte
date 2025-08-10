<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet/index.ts";
  import * as Sidebar from "$lib/components/ui/sidebar/index.ts";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.ts";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
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
    general: [
      {
        title: "Introduction",
        link: "/homelab",
        abb: "homelab",
      },
      {
        title: "Future Upgrade Path",
        link: "/homelab/path",
        abb: "path",
      },
    ],
    current: [
      {
        title: "Containers",
        link: "/homelab/containers",
        abb: "containers",
      },
      {
        title: "Harbor",
        link: "/homelab/harbor",
        abb: "harbor",
      },
      {
        title: "Monitoring",
        link: "/homelab/monitoring",
        abb: "monitoring",
      },
    ],
    planned: [
      {
        title: "Gitea",
        link: "/homelab/gitea",
        abb: "gitea",
      },
      {
        title: "Adblocker",
        link: "/homelab/adblocker",
        abb: "adblocker",
      },
      {
        title: "NAS",
        link: "/homelab/nas",
        abb: "nas",
      },
      {
        title: "CDN/Image Hosting",
        link: "/homelab/cdn",
        abb: "cdn",
      },
    ],
  };

  let isOpen = $state(true);
  let selected: Item = $state(
    items.general.filter(
      (item) => item.abb == $page.url.pathname.split("/").filter(Boolean).pop(),
    )[0] ||
      items.current.filter(
        (item) =>
          item.abb == $page.url.pathname.split("/").filter(Boolean).pop(),
      )[0] ||
      items.planned.filter(
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

<Sidebar.Provider bind:open={isOpen} class="pt-15 hidden md:flex ">
  <Sidebar.Root class="mt-15 border-transparent " collapsible="icon">
    <Sidebar.Header>
      <Sidebar.Menu>
        <Sidebar.MenuItem class="relative">
          <Sidebar.Trigger class="absolute text-center" />
          {#if isOpen}
            <h1 in:fade={fadeIn} class="text-xl w-full pl-10">Homelab</h1>
          {/if}
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Header>
    <Sidebar.Content>
      {#if isOpen}
        <div in:fade={fadeIn}>
          {#key selected}
            <Sidebar.Group>
              <Sidebar.GroupLabel class="text-md">General</Sidebar.GroupLabel>
              <Sidebar.GroupContent>
                <Sidebar.Menu class="pl-2 pt-2">
                  {#each items.general as item}
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
              <Sidebar.GroupLabel class="text-md"
                >Current Services</Sidebar.GroupLabel
              >
              <Sidebar.GroupContent>
                <Sidebar.Menu class="pl-2 pt-2">
                  {#each items.current as item}
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
              <Sidebar.GroupLabel class="text-md"
                >Planned Services</Sidebar.GroupLabel
              >
              <Sidebar.GroupContent>
                <Sidebar.Menu class="pl-2 pt-2">
                  {#each items.planned as item}
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton
                        class={`${item.abb == selected.abb ? "bg-muted text-foreground" : ""}`}
                        onclick={() => redirectTo(item)}
                        aria-disabled={true}>{item.title}</Sidebar.MenuButton
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
          <Breadcrumb.Link href="/homelab">Homelab</Breadcrumb.Link>
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

<div class="pt-15 md:hidden">
  <Sheet.Root>
    <Sheet.Content side="left" class="md:hidden py-5 px-2">
      <div class="text-xl font-bold">
        <h1 in:fade={fadeIn} class="text-2xl w-full pl-10">Homelab</h1>
      </div>
      <Separator />
      {#if isOpen}
        <div in:fade={fadeIn}>
          {#key selected}
            <div class="my-3 px-5">
              <h2 class="text-md font-bold text-xl text-muted-accent">
                General
              </h2>
              <div class="mt-5 pl-2 pt-2 grid grid-rows gap-3">
                {#each items.general as item}
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
            <div class="my-3 px-5">
              <h2 class="text-md font-bold text-xl text-muted-accent">
                Planned
              </h2>
              <div class="mt-5 pl-2 pt-2 grid grid-rows gap-3">
                {#each items.current as item}
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
            <div class="my-3 px-5">
              <h2 class="text-md font-bold text-xl text-muted-accent">
                Planned
              </h2>
              <div class="mt-5 pl-2 pt-2 grid grid-rows gap-3">
                {#each items.planned as item}
                  <div class="grid grid-cols-1 justify-center items-center">
                    <Button
                      class={`text-foreground bg-transparent hover:bg-accent ${`${item.abb == selected.abb ? "bg-muted text-foreground" : ""}`}`}
                      onclick={() => redirectTo(item)}
                      aria-disabled={true}>{item.title}</Button
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
