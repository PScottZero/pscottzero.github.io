<script lang="ts">
	import IconLink from '$lib/components/icon-link.svelte';
	import Section from '$lib/components/section.svelte';
	import Window from '$lib/components/window.svelte';
	import content from '$lib/content.json';
</script>

<header>
	<div class="inner-header">
		<div class="logo">
			<IconLink title="Logo" href="/" src="icons/logo.png" />
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
				src="icons/email.png"
			/>
			<IconLink
				title="Resume"
				href="https://drive.google.com/file/d/181m4g11n53sekOgt40T1ZhLruRoqN56X/view?usp=sharing"
				src="icons/resume.png"
			/>
			<IconLink
				title="LinkedIn"
				href="https://www.linkedin.com/in/paul-scott-047858140/"
				src="icons/linkedin.png"
			/>
			<IconLink
				title="GitHub"
				href="https://github.com/PScottZero"
				src="icons/github.png"
			/>
		</div>
	</div>
</header>

<main>
	<Window title="Bio">
		<div class="banner">
			<div class="profile">
				<img src="images/banner/profile.jpg" alt="Myself" />
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
		<Section {...section} />
	{/each}
</main>

<footer>
	Email at
	<a href="mailto:pauljscott8@gmail.com">pauljscott8@gmail.com</a>
	or call at (215) 880-9592
	<br />
	Updated August 13<sup>th</sup>, 2025
</footer>

<style lang="scss">
	@use '$lib/scss/colors.scss' as c;
	@use '$lib/scss/mixins.scss' as m;
	@use '$lib/scss/variables.scss' as v;

	$page-links-spacing: 0.25rem;
	$banner-margin: 2rem;
	$banner-margin-mobile: 1rem;

	:global {
		* {
			box-sizing: border-box;
			padding: 0;
			margin: 0;
		}

		html,
		body {
			min-width: 352px;
			background-color: c.$background-color;
			color: black;
			font-family: 'Jura', Arial, Helvetica, sans-serif;
		}

		a {
			text-decoration: none;
		}
	}

	/* header styles */

	header {
		@include m.double-border(c.$header-border-color1, c.$header-border-color2);
		z-index: 3;
		position: sticky;
		top: 0;
		width: 100%;
		padding: v.$border-size * 2;
		background: c.$header-color;
	}

	.inner-header {
		display: grid;
		grid-template-columns: 1fr minmax(auto, 24rem) 1fr;
		grid-template-rows: v.$header-height;
		background: c.$content-color;

		@include m.mobile {
			grid-template-columns: 1fr auto;
		}
	}

	.logo,
	.external-links {
		@include m.flex-vertical-center;
		@include m.menu-border;
		padding: v.$header-padding;
	}

	.logo {
		@include m.mobile {
			@include m.flex-center;
		}
	}

	.page-links {
		@include m.menu-border;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: $page-links-spacing;
		padding: $page-links-spacing;
		background: c.$menu-color;

		a {
			@include m.flex-center;
			@include m.double-border(
				c.$page-links-border-color1,
				c.$page-links-border-color2
			);
			background-color: c.$page-links-color;
			color: white;
		}

		a:hover {
			@include m.double-border(
				c.$page-links-border-color2,
				c.$page-links-border-color1
			);
		}

		@include m.mobile {
			display: none;
		}
	}

	.external-links {
		display: flex;
		gap: 1rem;
		justify-content: right;
	}

	/* main styles */

	main {
		max-width: 80rem;
		padding: 0 v.$window-spacing;
		margin: auto;

		@include m.mobile {
			padding: 0 v.$window-spacing-mobile;
			margin: auto;
		}
	}

	.banner {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: auto 1fr;
		align-items: center;
		background: url('/images/banner/background.jpg');
		background-size: cover;
		background-position: 50%;

		@include m.mobile {
			grid-template-rows: auto 1fr;
			grid-template-columns: 1fr;
			font-size: v.$medium-font-size;
		}

		p {
			@include m.flex-center;
			margin: $banner-margin;
			margin-left: 0;
			font-size: v.$large-font-size;
			font-weight: bold;
			line-height: 2;
			color: white;
			text-shadow: 0 0 4px black;

			@include m.mobile {
				margin: $banner-margin-mobile;
				margin-top: 0;
				font-size: v.$medium-font-size;
			}
		}
	}

	.profile {
		@include m.flex-center;

		img {
			@include m.content-border;
			border-width: v.$border-size * 2;
			width: 16rem;
			height: auto;
			margin: $banner-margin;

			@include m.mobile {
				width: 12rem;
				margin: $banner-margin-mobile;
			}
		}
	}

	/* footer styles */

	footer {
		padding: v.$window-spacing * 2 v.$window-spacing;
		font-size: v.$large-font-size;
		text-align: center;
		color: white;

		@include m.mobile {
			padding: v.$window-spacing-mobile * 2 v.$window-spacing-mobile;
		}

		a {
			color: c.$window-border-color1;

			&:hover {
				color: c.$window-color;
			}
		}
	}
</style>
