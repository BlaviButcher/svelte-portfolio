<script lang="ts">
	import InfoTile from '$lib/InfoTile.svelte';
	import MainTile from '$lib/NumberCodeTile.svelte';

	import { onMount } from 'svelte';

	// initialize and default
	let tileKey = 't';
	let tileWhich = 84;
	let tileCode = 'KeyT';

	// set variables according to current KeyboardEvent
	function keyDown(e: KeyboardEvent) {
		tileKey = e.key;
		tileWhich = e.which;
		tileCode = e.code;
	}

	onMount(() => {
		// Stop keys from doing there function ie F3 won't open search
		document.onkeydown = function (e) {
			return false;
		};
	});
</script>

<svelte:window on:keydown={keyDown} />

<div class="top-container">
	<MainTile content={tileWhich} />
</div>
<div class="bottom-container">
	<InfoTile title="event.key" content={tileKey} />
	<InfoTile title="event.which" content={tileWhich} />
	<InfoTile title="event.code" content={tileCode} />
</div>

<style>


	.top-container {
		display: flex;
		justify-content: center;
		align-items: flex-end;

		flex: 3;
		width: 100%;
	}

	.bottom-container {
		display: flex;
		justify-content: space-around;

		flex: 1;
		width: 80%;
	}
</style>
