<script module lang="ts">
	type CardProps = {
		title: string;
		description?: string | string[];
		image: string;
		link?: string;
		large: boolean;
		folder: string;
	};
</script>

<script lang="ts">
	let { title, description, image, link, folder, large }: CardProps = $props();
	const hasLink = link !== undefined;
	description =
		typeof description === 'string' ? [description] : (description ?? []);
</script>

<button
	class="card {large ? '' : 'card-small'} {hasLink ? 'link' : ''}"
	onclick={hasLink ? () => window.open(link) : undefined}
>
	<div class="label">
		<h1 class="title">{title}</h1>
		<div class="description">
			{#each description as line, i (i)}
				<p>{line}</p>
			{/each}
			{#if hasLink}
				<img class="link-icon" src="icons/link.svg" alt="link" />
			{/if}
		</div>
	</div>
	<img class="image" src="/images/{folder}/{image}" alt={title} />
</button>

<style lang="scss">
	@use '$lib/scss/colors.scss' as c;
	@use '$lib/scss/mixins.scss' as m;
	@use '$lib/scss/variables.scss' as v;

	.card {
		@include m.content-border;
		position: relative;
		aspect-ratio: 4/3;
		overflow: hidden;
		font-family: inherit;
		color: black;
		background-color: c.$menu-color;
	}

	.label {
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 0.5rem;
		background-color: rgba(c.$content-color, 0.85);
		border-top: v.$border-size solid c.$content-border-color1;
	}

	.card-small .label {
		@include m.mobile {
			padding: 0.25rem;
		}
	}

	.title {
		font-size: v.$large-font-size;
	}

	.card-small .title {
		@include m.mobile {
			font-size: v.$medium-font-size;
		}
	}

	.description {
		position: relative;
		font-size: v.$medium-font-size;
	}

	.card-small .description {
		@include m.mobile {
			font-size: v.$small-font-size;
		}
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.link:hover {
		@include m.double-border(
			c.$content-border-color2,
			c.$content-border-color1
		);
		cursor: pointer;
	}

	.link-icon {
		position: absolute;
		width: 1rem;
		right: 0;
		bottom: 0;
	}
</style>
