<div class="whole-thing">
	<div class="top">
		<div class="url">
			<h1>https://hooktest.xyz</h1>
			<div class="bit">/<input type="text" value="red-sparrow" /></div>
		</div>
	</div>
	<div class="bottom">
		<div class="list">
			<div class="empty">
				No HTTP requests have been made to https://hooktest.xyz/red-sparrow in the last hour
			</div>
		</div>
	</div>
</div>

<style>
	.whole-thing {
		width: 100%;
		max-width: 720px;

		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		display: flex;
		flex-direction: column;

		margin: auto;
	}
	.top {
		padding: 5rem;
	}
	.bottom {
		padding: 3rem;
		padding-top: 0;
		padding-bottom: 0;
	}
	.url {
		display: flex;
		flex-wrap: wrap;
		font-size: 2rem;
	}
	.bit {
		border-radius: 4px;
		background-color: rgb(255 255 255 / 30%);
	}

	.bottom {
		flex: 1;
	}
	.list {
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		height: 100%;

		background-color: rgb(255 255 255 / 30%);
	}
	.empty {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5rem;
		text-align: center;
		height: 100%;
		opacity: 0.5;
	}
</style>
