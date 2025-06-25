<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.ts";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.ts";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

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
    linux: [
      {
        title: "Introduction",
        link: "/dots",
        abb: "dots",
      },
      {
        title: "Window Manager (Niri)",
        link: "/dots/niri",
        abb: "niri",
      },
      {
        title: "Astal & AGS",
        link: "/dots/ags",
        abb: "ags",
      },
      {
        title: "Swaylock (TBD)",
        link: "/dots/lock",
        abb: "lock",
        disabled: true,
      },
      {
        title: "Neovim",
        link: "/dots/nvim",
        abb: "nvim",
      },
      {
        title: "Terminal",
        link: "/dots/term",
        abb: "term",
      },
      {
        title: "Firefox (TBD)",
        link: "/dots/firefox",
        abb: "firefox",
        disabled: true,
      },
    ],
  };

  let isOpen = $state(true);
  let selected: Item = $state(
    items.linux.filter(
      (item) => item.abb == $page.url.pathname.split("/").filter(Boolean).pop(),
    )[0],
  );

  function redirectTo(item: any) {
    selected = item;
    goto(item.link);
  }

  let { children } = $props();
</script>

<Sidebar.Provider bind:open={isOpen} class="pt-15">
  <Sidebar.Root class="pt-15 border-transparent " collapsible="icon">
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
              <Sidebar.GroupContent>
                <Sidebar.Menu class="pl-2 pt-2">
                  {#each items.linux as item}
                    <Sidebar.MenuItem>
                      <Sidebar.MenuButton
                        class={`${item.abb == selected.abb ? "bg-muted text-foreground" : ""}`}
                        onclick={() => redirectTo(item)}
                        aria-disabled={item.disabled || false}
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
          <Breadcrumb.Link href="/dots">Dotfiles</Breadcrumb.Link>
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
