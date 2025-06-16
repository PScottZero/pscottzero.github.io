<script lang="ts">
	const { title, href, src } = $props();
</script>

<a {title} {href} target={href === '/' ? '' : '_blank'}>
	<img {src} alt={title} />
</a>

<style lang="scss">
	@use '$lib/scss/mixins.scss' as m;
	@use '$lib/scss/variables.scss' as v;

	a img {
		@include m.flex-center;
		width: auto;
		height: v.$header-height - v.$header-padding * 2;

		&:hover {
			outline: v.$header-icon-border;
		}
	}
</style>
