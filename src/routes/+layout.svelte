<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";
	import '@fontsource-variable/red-hat-display';
	import '@fontsource-variable/red-hat-display/wght-italic.css';
	import '@fontsource/sarina';


	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	{@render children()}
</div>
