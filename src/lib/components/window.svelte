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
		<div class="title-bar">
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
			<div class="item-count">{itemCount} Items</div>
		{/if}
	</div>
	<div class="corners">
		{#each { length: 9 }}
			<div></div>
		{/each}
	</div>
</div>

<style lang="scss">
	@use '$lib/scss/colors.scss' as c;
	@use '$lib/scss/mixins.scss' as m;
	@use '$lib/scss/variables.scss' as v;

	$title-bar-height: 2rem;
	$corner-size: calc($title-bar-height + v.$border-size * 3);
	$window-icon-large-dim: 1.2rem;
	$window-icon-small-dim: 0.4rem;

	@mixin window-border {
		@include m.double-border(c.$window-border-color1, c.$window-border-color2);
	}

	.outer-window {
		@include window-border;
		position: relative;
		margin-top: v.$window-spacing;
		background: c.$window-color;
		padding: v.$border-size * 2 + 0.5px;

		@include m.mobile {
			margin-top: v.$window-spacing-mobile;
		}
	}

	.inner-window {
		@include m.double-border(c.$window-border-color2, c.$window-border-color1);
		z-index: 2;
		position: relative;
	}

	.content {
		@include m.content-border;
		background: c.$content-color;
	}

	.title-bar {
		display: grid;
		grid-template-columns: $title-bar-height 1fr $title-bar-height $title-bar-height;
		grid-template-rows: $title-bar-height;
		text-align: center;
		font-size: v.$large-font-size;
	}

	.title {
		@include window-border;
		@include m.flex-center;
		color: white;
		overflow: hidden;
		white-space: nowrap;
	}

	.menu {
		@include m.flex-vertical-center;
		@include m.menu-border;
		height: 2.5rem;
		color: c.$menu-font-color;
		background-color: c.$menu-color;
		font-size: v.$large-font-size;

		span {
			margin-left: 1rem;
		}
	}

	.button {
		@include m.flex-center;
		@include window-border;

		div {
			@include window-border;
		}
	}

	.close div {
		width: $window-icon-large-dim;
		height: $window-icon-small-dim;
	}

	.minimize div {
		width: $window-icon-small-dim;
		height: $window-icon-small-dim;
	}

	.maximize div {
		width: $window-icon-large-dim;
		height: $window-icon-large-dim;
	}

	.item-count {
		@include m.flex-vertical-center;
		@include m.content-border;
		background: c.$content-color;
		height: $title-bar-height;
		font-size: v.$large-font-size;
		padding-left: v.$card-spacing;
	}

	.corners {
		z-index: 1;
		display: grid;
		grid-template-columns: $corner-size 1fr $corner-size;
		grid-template-rows: $corner-size 1fr $corner-size;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		div {
			@include window-border;
		}
	}
</style>
