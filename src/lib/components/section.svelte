<script lang="ts">
	import type { CardData } from './card.svelte';
	import Card, { CardDims } from './card.svelte';
	import Window from './window.svelte';

	const CARD_SPACING = '0.5rem';
	const SMALL_FONT_SIZE = '12px';
	const MEDIUM_FONT_SIZE = '16px';
	const LARGE_FONT_SIZE = '20px';

	type SectionData = {
		id: string;
		imageFolder?: string;
		title: string;
		columns: number;
		content: CardData[];
	};

	type SectionProps = {
		data: SectionData;
		fewerColumns: number;
	};

	let { data, fewerColumns }: SectionProps = $props();

	function getCardWidth(columns: number): string {
		const width = 100 / columns + '%';
		const lessWidth = columns - 1 + ' * ' + CARD_SPACING + ' / ' + columns;
		return 'calc(' + width + ' - ' + lessWidth + ')';
	}

	function getCardDims(columns: number, fewerColumns: number): CardDims {
		const dims = new CardDims();
		const columnsAdjusted = Math.max(columns - fewerColumns, 1);
		dims.width = getCardWidth(columnsAdjusted);

		if (columnsAdjusted == 2 && fewerColumns == 2) {
			dims.titleSize = MEDIUM_FONT_SIZE;
			dims.descriptionSize = SMALL_FONT_SIZE;
			dims.labelPadding = `calc(${CARD_SPACING} / 2)`;
		} else {
			dims.titleSize = LARGE_FONT_SIZE;
			dims.descriptionSize = MEDIUM_FONT_SIZE;
			dims.labelPadding = CARD_SPACING;
		}

		return dims;
	}
</script>

<div id={data.id} class="section">
	<Window title={data.title} itemCount={data.content.length}>
		<div class="cards">
			{#each data.content as card, i (i)}
				<Card
					data={card}
					dims={getCardDims(data.columns, fewerColumns)}
					imageFolder={data.imageFolder ?? data.id}
				/>
			{/each}
		</div>
	</Window>
</div>

<style lang="scss">
	@use '$lib/scss/mixins.scss' as m;
	@use '$lib/scss/variables.scss' as v;

	.section {
		margin-top: calc(-1 * v.$page-links-anchor-offset);
		padding-top: v.$page-links-anchor-offset;
	}

	.cards {
		@include m.flex-center;
		flex-wrap: wrap;
		gap: v.$card-spacing;
		padding: v.$card-spacing;
	}
</style>
