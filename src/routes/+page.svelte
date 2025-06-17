<script lang="ts">
	import IconLink from '$lib/components/icon-link.svelte';
	import Section from '$lib/components/section.svelte';
	import Window from '$lib/components/window.svelte';
	import content from '$lib/content.json';
	import { onMount } from 'svelte';

	const MOBILE_CUTOFF = 640;
	const TABLET_CUTOFF = 1024;

	const MOBILE_COLUMN_ADJUST = 2;
	const TABLET_COLUMN_ADJUST = 1;

	let fewerColumns = $state(0);

	function refreshFewerColumns() {
		if (window.innerWidth <= MOBILE_CUTOFF) {
			fewerColumns = MOBILE_COLUMN_ADJUST;
		} else if (window.innerWidth <= TABLET_CUTOFF) {
			fewerColumns = TABLET_COLUMN_ADJUST;
		} else {
			fewerColumns = 0;
		}
	}

	onMount(() => {
		refreshFewerColumns();
		window.addEventListener('resize', refreshFewerColumns);
		return () => {
			window.removeEventListener('resize', refreshFewerColumns);
		};
	});
</script>

<header>
	<div class="inner-header">
		<div class="logo">
			<IconLink title="Logo" href="/" src="images/logo.png" />
		</div>
		<div class="page-links">
			<a href="#experience">Experience</a>
			<a href="#education">Education</a>
			<a href="#languages">Skills</a>
			<a href="#projects">Projects</a>
			<a href="#grad-courses">Courses</a>
			<a href="#hobbies">Hobbies</a>
		</div>
		<div class="external-links">
			<IconLink
				title="Email"
				href="mailto:pauljscott8@gmail.com"
				src="images/email.png"
			/>
			<IconLink
				title="Resume"
				href="https://drive.google.com/file/d/181m4g11n53sekOgt40T1ZhLruRoqN56X/view?usp=sharing"
				src="images/resume.png"
			/>
			<IconLink
				title="LinkedIn"
				href="https://www.linkedin.com/in/paul-scott-047858140/"
				src="images/linkedin.png"
			/>
			<IconLink
				title="GitHub"
				href="https://github.com/PScottZero"
				src="images/github.png"
			/>
		</div>
	</div>
</header>

<main>
	<Window title="Bio">
		<div class="banner">
			<div class="profile">
				<img src="images/profile.jpg" alt="Myself" />
			</div>
			<p>
				Howdy! My name is Paul Scott, and I am a software engineer at Vistar
				Media. I received my MSE in Computer & Information Science from the
				University of Pennsylvania, and my BS in Computer Science from Penn
				State. My areas of interest are computer graphics, distributed systems,
				emulation, machine learning, and web development.
			</p>
		</div>
	</Window>

	{#each content as section}
		<Section data={section} {fewerColumns} />
	{/each}

	<footer>
		Email at
		<a href="mailto:pauljscott8@gmail.com">pauljscott8@gmail.com</a>
		or call at (215) 880-9592
		<br />
		Updated July 16<sup>th</sup>, 2025
	</footer>
</main>

<style lang="scss">
	@use '$lib/globals.scss' as g;

	:global {
		* {
			box-sizing: border-box;
			padding: 0;
			margin: 0;
		}

		html,
		body {
			min-width: g.$min-width;
			background-color: g.$background-color;
			color: black;
			font-family: 'Jura', Arial, Helvetica, sans-serif;
		}

		a {
			text-decoration: none;
		}
	}

	main {
		max-width: g.$max-width;
		width: 100%;
		padding: 0 g.$window-spacing;
		margin: auto;

		@include g.mobile {
			padding: 0 g.$window-spacing-mobile;
			margin: auto;
		}
	}

	header {
		@include g.header-border;
		z-index: 3;
		position: sticky;
		top: 0;
		width: 100%;
		padding: g.$border-size * 2;
		background: g.$header-color;
	}

	.inner-header {
		display: grid;
		grid-template-columns: 1fr minmax(auto, g.$page-links-width) 1fr;
		grid-template-rows: g.$header-height;
		background: g.$content-color;

		@include g.mobile {
			grid-template-columns: 1fr auto;
		}
	}

	.logo,
	.external-links {
		@include g.flex-vertical-center;
		@include g.menu-border;
		padding: g.$header-padding;
	}

	.logo {
		@include g.mobile {
			@include g.flex-center;
		}
	}

	.page-links {
		@include g.menu-border;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: g.$page-links-spacing;
		padding: g.$page-links-spacing;
		background: g.$menu-color;

		a {
			@include g.flex-center;
			@include g.double-border(
				g.$page-links-border-color1,
				g.$page-links-border-color2
			);
			background-color: g.$page-links-color;
			color: white;
		}

		a:hover {
			@include g.double-border(
				g.$page-links-border-color2,
				g.$page-links-border-color1
			);
		}

		@include g.mobile {
			display: none;
		}
	}

	.external-links {
		display: flex;
		gap: g.$header-icon-spacing;
		justify-content: right;
	}

	.banner {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: auto 1fr;
		background: url('/images/banner.jpg');
		background-size: cover;
		background-position: 50%;

		@include g.mobile {
			grid-template-rows: auto 1fr;
			grid-template-columns: 1fr;
			font-size: g.$medium-font-size;
		}

		p {
			@include g.flex-center;
			margin: g.$banner-margin;
			margin-left: 0;
			font-size: g.$large-font-size;
			font-weight: bold;
			line-height: 2;
			color: white;
			text-shadow: g.$description-shadow;

			@include g.mobile {
				margin: g.$banner-margin-mobile;
				margin-top: 0;
				font-size: g.$medium-font-size;
			}
		}
	}

	.profile {
		@include g.flex-center;
		width: 100%;
		height: 100%;

		img {
			@include g.content-border;
			border-width: g.$border-size * 2;
			width: g.$profile-size;
			height: auto;
			margin: g.$banner-margin;
		}

		@include g.mobile {
			img {
				width: g.$profile-size-mobile;
				margin: g.$banner-margin-mobile;
			}
		}
	}

	footer {
		padding: g.$window-spacing * 2 0;
		font-size: g.$large-font-size;
		line-height: 1.5;
		text-align: center;
		color: white;

		a {
			color: g.$window-border-color1;

			&:hover {
				color: g.$window-color;
			}
		}
	}
</style>
