<script lang="ts">
	// const { v4: uuidv4 } = require('uuid');

	import { v4 as uuidv4 } from 'uuid';

	import { onMount } from 'svelte';

	import TodoApi from '../TodoStorage';

	import { items } from '../stores';

	import Item from './Item.svelte';

	import NewItem from './NewItem.svelte';

	/**
	 * Add new item to items store and tack on rest of store
	 * update
	 * @param e event of new item div
	 */
	function handleNewItem(e: CustomEvent) {
		$items = [
			{
				id: uuidv4(),
				text: e.detail,
				completed: false
			},
			...$items
		];

		TodoApi.save($items);
	}

	/**
	 * Takes in the event of an updated item and updates that same item in the store (on id)
	 * with content
	 * @param e event of updated item div
	 */
	function handleUpdate(e: CustomEvent) {
		// gets index of items store where the id matches the id of the
		// item we updated
		const index = $items.findIndex((item) => item.id === e.detail.id);
		$items[index] = e.detail;
		TodoApi.save($items);
	}

	/**
	 * Takes in the event of the click div and filters out its item id
	 * from the current store
	 * @param e event of deleted item
	 */
	function handleDelete(e: CustomEvent) {
		console.log(e);
		$items = $items.filter((item) => item.id !== e.detail.id);
		TodoApi.save($items);
	}

	// Gets all the items in our local storage to be used
	onMount(async () => {
		$items = await TodoApi.getAll();
	});
</script>

<div class="list">
	<NewItem on:newItem={handleNewItem} />
	{#each $items as item}
		<Item {...item} on:update={handleUpdate} on:delete={handleDelete} />
	{:else}
		<p class="list-status">No items exist</p>
	{/each}
</div>

<style>
	.list {
		padding: 15px;
	}

	.list-status {
		margin: 0;
		color: white;
		text-align: center;
		font-weight: bold;
		font-size: 1.1em;
	}
</style>
