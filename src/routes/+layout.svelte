<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import "../app.css";
	import ToggleTheme from "$lib/components/ui/toggleTheme/toggleTheme.svelte";
	import Navbar from "$lib/components/ui/navbar/navbar.svelte";
	import { Toaster } from "$lib/components/ui/sonner/index.ts";

	let { children } = $props();
</script>

<Navbar />
<ModeWatcher />
<Toaster position="top-center" />
{@render children()}
