<div class="container">
	<div class="card">
		<p>
			Here are two projects I worked on while learning svelte. I've chosen this layout so I get a
			bit of practice using page routes and __layout.
		</p>
		<p>
			Todo List was done with a tutorial on the backburner to keep me on the right track regarding
			architecture. It allowed me to have small tasks to implement and then double check that I had
			the right idea. I find I learn best by making an attempt then comparing it to something else
			to see if I could have implemented it cleaner or more efficiently and check for better
			practices.
		</p>
		<p>
			Key Codes was my second project which was just something quick to fill in a slot in my menu
			bar. It's turned out to be quite useful. It was my first attempt without having a tutorial to
			fall back on if things went wrong.
		</p>
	</div>
</div>

<style>
	div {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.card {
		display: flex;
		flex-direction: column;
		text-align: center;
		height: 70%;
		margin: 0 30%;
		border-radius: 5px;
		background: #fff;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
		padding: 0 20px;
	}
</style>
