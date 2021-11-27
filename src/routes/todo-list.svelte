<script lang="ts">
	import Header from '$lib/Header.svelte';
	import List from '$lib/List.svelte';
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
