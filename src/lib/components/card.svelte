<script module lang="ts">
	export type CardData = {
		title: string;
		description?: string | string[];
		image: string;
		link?: string;
	};

	export class CardDims {
		width: string = '';
		titleSize: string = '';
		descriptionSize: string = '';
		labelPadding: string = '';
	}

	type CardProps = {
		data: CardData;
		dims: CardDims;
		imageFolder: string;
	};
</script>

<script lang="ts">
	let { data, dims, imageFolder }: CardProps = $props();

	const hasLink = data.link !== undefined;

	const descriptionLines: string[] = [];
	if (data.description !== undefined) {
		if (Array.isArray(data.description)) {
			for (const line of data.description) {
				descriptionLines.push(line);
			}
		} else {
			descriptionLines.push(data.description);
		}
	}
</script>

<button
	class="card {hasLink ? 'link' : ''}"
	style:flex={dims.width}
	style:max-width={dims.width}
	onclick={hasLink ? () => window.open(data.link) : undefined}
>
	<div class="label" style:padding={dims.labelPadding}>
		<div class="title" style:font-size={dims.titleSize}>
			{data.title}
		</div>
		<div class="description" style:font-size={dims.descriptionSize}>
			{#each descriptionLines as line, i (i)}
				<p>{line}</p>
			{/each}
			{#if hasLink}
				<img class="link-icon" src="images/link.svg" alt="link" />
			{/if}
		</div>
	</div>
	<img
		class="image"
		src="/images/{imageFolder}/{data.image}"
		alt={data.title}
	/>
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
		background-color: c.$menu-color;
	}

	.label {
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 1rem;
		background-color: rgba(c.$content-color, 0.85);
		border-top: v.$border-size solid c.$content-border-color1;
	}

	.title {
		font-size: v.$large-font-size;
		font-weight: bold;
	}

	.description {
		position: relative;
		font-size: v.$medium-font-size;
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
