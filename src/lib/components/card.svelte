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

	const descLines: string[] = [];
	if (data.description !== undefined) {
		if (Array.isArray(data.description)) {
			for (const line of data.description) {
				descLines.push(line);
			}
		} else {
			descLines.push(data.description);
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
			{#each descLines as line, i (i)}
				<p>{line}</p>
			{/each}
			{#if hasLink}
				<img class="linkIcon" src="images/link.svg" alt="link" />
			{/if}
		</div>
	</div>
	<img
		class="image"
		src={'/images/' + imageFolder + '/' + data.image}
		alt={data.title}
	/>
</button>

<style lang="scss">
	@use '$lib/globals.scss' as g;

	.card {
		@include g.content-border;
		position: relative;
		aspect-ratio: 4/3;
		background-color: g.$menu-color;
		overflow: hidden;
		font-family: inherit;
	}

	.label {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 1rem;
		background-color: rgba(g.$content-color, 0.85);
		border-top: g.$border-size solid g.$content-border-color1;
	}

	.title {
		font-size: g.$large-font-size;
		font-weight: bold;
	}

	.description {
		position: relative;
		font-size: g.$medium-font-size;
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.link:hover {
		@include g.double-border(
			g.$content-border-color2,
			g.$content-border-color1
		);
		cursor: pointer;
	}

	.linkIcon {
		position: absolute;
		width: g.$card-link-icon-size;
		height: auto;
		right: 0;
		bottom: 0;
	}
</style>
