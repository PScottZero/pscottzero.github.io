<script lang="ts">
	import type { Snippet } from 'svelte';

	type WindowProps = {
		title: string;
		itemCount?: number;
		children?: Snippet;
	};

	let { title, itemCount, children }: WindowProps = $props();
</script>

<div class="outer-window">
	<div class="inner-window">
		<div class="titleBar">
			<div class="button close">
				<div></div>
			</div>
			<span class="title">{title}</span>
			<div class="button minimize">
				<div></div>
			</div>
			<div class="button maximize">
				<div></div>
			</div>
		</div>
		<div class="menu">
			<span>
				<u>F</u>ile
			</span>
			<span>
				<u>E</u>dit
			</span>
			<span>
				<u>V</u>iew
			</span>
		</div>
		<div class="content">
			{@render children?.()}
		</div>
		{#if itemCount}
			<div class="itemCount">{itemCount} Items</div>
		{/if}
	</div>
	<div class="corners">
		{#each { length: 9 }}
			<div></div>
		{/each}
	</div>
</div>

<style lang="scss">
	@use '$lib/globals.scss' as g;

	.outer-window {
		@include g.window-border;
		position: relative;
		margin-top: g.$window-spacing;
		background: g.$window-color;
		padding: g.$outer-window-padding;

		@include g.mobile {
			margin-top: g.$window-spacing-mobile;
		}
	}

	.inner-window {
		@include g.double-border(g.$window-border-color2, g.$window-border-color1);
		z-index: 2;
		position: relative;
	}

	.content {
		@include g.content-border;
		background: g.$content-color;
	}

	.titleBar {
		display: grid;
		grid-template-columns: g.$title-bar-height 1fr g.$title-bar-height g.$title-bar-height;
		grid-template-rows: g.$title-bar-height;
		text-align: center;
		font-size: g.$large-font-size;
	}

	.title {
		@include g.window-border;
		@include g.flex-center;
		color: white;
		overflow: hidden;
		white-space: nowrap;
	}

	.menu {
		@include g.flex-vertical-center;
		@include g.menu-border;
		height: g.$menu-bar-height;
		color: g.$menu-font-color;
		background-color: g.$menu-color;
		font-size: g.$large-font-size;

		span {
			margin-left: g.$menu-spacing;
		}
	}

	.button {
		@include g.flex-center;
		@include g.window-border;

		div {
			@include g.window-border;
		}
	}

	.close {
		float: left;

		div {
			width: g.$window-icon-large-dim;
			height: g.$window-icon-small-dim;
		}
	}

	.minimize,
	.maximize {
		float: right;
	}

	.minimize div {
		width: g.$window-icon-small-dim;
		height: g.$window-icon-small-dim;
	}

	.maximize div {
		width: g.$window-icon-large-dim;
		height: g.$window-icon-large-dim;
	}

	.itemCount {
		@include g.flex-vertical-center;
		@include g.content-border;
		background: g.$content-color;
		height: g.$title-bar-height;
		font-size: g.$large-font-size;
		padding-left: g.$card-spacing;
	}

	.corners {
		display: grid;
		grid-template-columns: g.$corner-size 1fr g.$corner-size;
		grid-template-rows: g.$corner-size 1fr g.$corner-size;
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		div {
			@include g.window-border;
		}
	}
</style>
