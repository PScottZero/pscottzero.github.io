<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		itemCount,
		children
	}: {
		title: string;
		itemCount?: number;
		children?: Snippet;
	} = $props();
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
	@use '$lib/scss/mixins.scss' as m;
	@use '$lib/scss/variables.scss' as v;

	.outer-window {
		@include m.window-border;
		position: relative;
		margin-top: v.$window-spacing;
		background: v.$window-color;
		padding: v.$outer-window-padding;

		@include m.mobile {
			margin-top: v.$window-spacing-mobile;
		}
	}

	.inner-window {
		@include m.double-border(v.$window-border-color2, v.$window-border-color1);
		z-index: 2;
		position: relative;
	}

	.content {
		@include m.content-border;
		background: v.$content-color;
	}

	.titleBar {
		display: grid;
		grid-template-columns: v.$title-bar-height 1fr v.$title-bar-height v.$title-bar-height;
		grid-template-rows: v.$title-bar-height;
		text-align: center;
		font-size: v.$large-font-size;
	}

	.title {
		@include m.window-border;
		@include m.flex-center;
		color: white;
		overflow: hidden;
		white-space: nowrap;
	}

	.menu {
		@include m.flex-vertical-center;
		@include m.menu-border;
		height: v.$menu-bar-height;
		color: v.$menu-font-color;
		background-color: v.$menu-color;
		font-size: v.$large-font-size;

		span {
			margin-left: v.$menu-spacing;
		}
	}

	.button {
		@include m.flex-center;
		@include m.window-border;

		div {
			@include m.window-border;
		}
	}

	.close {
		float: left;

		div {
			width: v.$window-icon-large-dim;
			height: v.$window-icon-small-dim;
		}
	}

	.minimize,
	.maximize {
		float: right;
	}

	.minimize div {
		width: v.$window-icon-small-dim;
		height: v.$window-icon-small-dim;
	}

	.maximize div {
		width: v.$window-icon-large-dim;
		height: v.$window-icon-large-dim;
	}

	.itemCount {
		@include m.flex-vertical-center;
		@include m.content-border;
		background: v.$content-color;
		height: v.$title-bar-height;
		font-size: v.$large-font-size;
		padding-left: v.$card-spacing;
	}

	.corners {
		display: grid;
		grid-template-columns: v.$corner-size 1fr v.$corner-size;
		grid-template-rows: v.$corner-size 1fr v.$corner-size;
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		div {
			@include m.window-border;
		}
	}
</style>
