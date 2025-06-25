<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import "../app.css";
	import ToggleTheme from "$lib/components/ui/toggleTheme/toggleTheme.svelte";
	import Navbar from "$lib/components/ui/navbar/navbar.svelte";

	let { children } = $props();
</script>

<Navbar />
<ModeWatcher />
{@render children()}
