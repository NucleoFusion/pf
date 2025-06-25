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

<Sidebar.Provider bind:open={isOpen} class="pt-15">
  <Sidebar.Root class="pt-15 border-transparent " collapsible="icon">
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
