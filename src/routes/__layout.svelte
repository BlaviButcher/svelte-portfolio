<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/keycodes">Key Codes</a>
		</li>
		<li>
			<a href="/todo-list">Todo List</a>
		</li>
	</ul>
</nav>

<slot />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');

	/* TODO: How do I connect app.css to app.html, so i don't need to globally select body and #svlete? */
	:global(body) {
		height: 100vh;
		margin: 0;
		padding: 0;
		background: #f3f4f9;
		font-size: 1.2rem;
		font-family: 'Outfit', sans-serif;
	}

	:global(#svelte) {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	ul {
		display: flex;
		list-style: none;
	}

	li {
		margin-left: 10px;
	}
</style>
