<script>
	import { createEventDispatcher } from 'svelte';
	export let id, text, completed;

	const dispatch = createEventDispatcher();

	function triggerUpdate() {
		completed = !completed;

		console.log(completed);
		dispatch('update', { id, text, completed });
	}

	function triggerDelete() {
		dispatch('delete', { id });
	}

	function handleKeyUp(e) {
		if (e.key === 'Enter') e.target.blur();
	}
</script>

<div class="item" class:completed on:dblclick={triggerDelete}>
	<input
		type="text"
		class="text-input"
		bind:value={text}
		readonly={completed}
		on:keyup={handleKeyUp}
		on:blur={triggerUpdate}
	/>

	<input
		type="checkbox"
		class="completed-checkbox"
		bind:checked={completed}
		on:click={triggerUpdate}
	/>
</div>

<style>
	.item {
		display: flex;
		align-items: center;
		padding: 15px;
		background: white;
	}

	.item:focus-within {
		background: rgba(255, 255, 255, 0.8);
	}

	.item.completed {
		background: #ddd;
	}

	.item.completed .text-input {
		color: #555;
		text-decoration: line-through;
	}
	.text-input {
		flex-grow: 1;
		background: none;
		border: none;
		outline: none;
		font-weight: 500;
		font-size: 1em;
	}

	.completed-checkbox {
		margin-left: 15px;
	}
</style>
