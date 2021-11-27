<script>
	export let title, content;
</script>

<div class="container">
	<div class="banner">{title}</div>
	<div class="content">{content}</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		text-align: center;
		height: 100px;
		width: 20%;
		border-radius: 5px;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}

	.banner {
		height: 1.8em;
		background: #b9e8fc;
		border-radius: 5px 5px 0 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content {
		background: #fff;
		flex: 1;
		border-radius: 0 0 5px 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
