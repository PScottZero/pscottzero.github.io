<script lang="ts">
	import Card from './card.svelte';
	import Window from './window.svelte';

	type SectionProps = {
		id: string;
		folder?: string;
		title: string;
		large: boolean;
		content: {
			title: string;
			description?: string | string[];
			image: string;
			link?: string;
		}[];
	};

	let { id, folder, title, large, content }: SectionProps = $props();
</script>

<div {id} class="section">
	<Window {title} itemCount={content.length}>
		<div class="cards {large ? 'cards-large' : 'cards-small'}">
			{#each content as card, i (i)}
				<Card {...card} {large} folder={folder ?? id} />
			{/each}
		</div>
	</Window>
</div>

<style lang="scss">
	@use '$lib/scss/mixins.scss' as m;
	@use '$lib/scss/variables.scss' as v;

	$page-links-anchor-offset: 5rem;

	@mixin columns($count) {
		grid-template-columns: repeat($count * 2, 1fr);

		@include m.tablet {
			grid-template-columns: repeat(($count - 1) * 2, 1fr);
		}

		@include m.mobile {
			grid-template-columns: repeat(($count - 2) * 2, 1fr);
		}
	}

	.section {
		margin-top: calc(-1 * $page-links-anchor-offset);
		padding-top: $page-links-anchor-offset;
	}

	.cards {
		display: grid;
		gap: v.$card-spacing;
		padding: v.$card-spacing;
	}

	.cards-large {
		@include columns(3);
	}

	.cards-small {
		@include columns(4);
	}
</style>
