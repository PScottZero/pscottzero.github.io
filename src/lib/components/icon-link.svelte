<script lang="ts">
	const { title, href, src } = $props();
</script>

<a {title} {href} target={href === '/' ? '' : '_blank'}>
	<img {src} alt={title} />
</a>

<style lang="scss">
	@use '$lib/globals.scss' as g;

	a img {
		@include g.flex-center;
		width: auto;
		height: g.$header-height - g.$header-padding * 2;

		&:hover {
			outline: g.$header-icon-border;
		}
	}
</style>
