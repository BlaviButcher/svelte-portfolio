<script lang="ts">
	import Header from '$lib/Header.svelte';
	import List from '$lib/List.svelte';

	import { onMount } from 'svelte';

	onMount(() => {
		// Allow keys to work as they should
		document.onkeydown = function (e) {
			return true;
		};
	});
</script>

<div class="container">
	<Header />
	<List />
</div>

<style>
	.container {
		width: 500px;
		background: #009579;
	}

	:global(.container *) {
		font-family: sans-serif;
	}
</style>
