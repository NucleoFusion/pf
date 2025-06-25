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

<Sidebar.Provider bind:open={isOpen} class="pt-15">
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
