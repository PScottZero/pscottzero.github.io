<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import IconLink from '$lib/components/icon-link.svelte';
	import Window from '$lib/components/window.svelte';
	import content from '$lib/content.json';
</script>

<header>
	<div class="outer-header">
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
		<div id={section.sectionId}>
			<Window title={section.title} itemCount={section.content.length}>
				<!-- <div class="cards">
					{#each section.content as card, i (i)}
						<Card data={card} dims={card.}></Card>
					{/each}
				</div> -->
			</Window>
		</div>
	{/each}

	<footer>
		Email at
		<a href="mailto:pauljscott8@gmail.com">pauljscott8@gmail.com</a>
		or call at (215) 880-9592
		<br />
		Updated April 15<sup>th</sup>, 2025
	</footer>
</main>

<style lang="scss">
	@use '$lib/scss/mixins.scss' as m;
	@use '$lib/scss/variables.scss' as v;

	:global {
		@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap');

		* {
			box-sizing: border-box;
			padding: 0;
			margin: 0;
		}

		html,
		body {
			min-width: v.$min-width;
			background-color: v.$background-color;
			color: black;
			font-family: 'Jura', Arial, Helvetica, sans-serif;
		}

		a {
			text-decoration: none;
		}
	}

	main {
		max-width: v.$max-width;
		width: 100%;
		padding: 0 v.$window-spacing;
		margin: auto;

		@include m.mobile {
			padding: 0 v.$window-spacing-mobile;
			margin: auto;
		}
	}

	.outer-header {
		@include m.header-border;
		z-index: 3;
		position: sticky;
		top: 0;
		width: 100%;
		padding: v.$border-size * 2;
		background: v.$header-color;
	}

	.inner-header {
		display: grid;
		grid-template-columns: 1fr minmax(auto, v.$page-links-width) 1fr;
		grid-template-rows: v.$header-height;
		background: v.$content-color;

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
		gap: v.$page-links-spacing;
		padding: v.$page-links-spacing;
		background: v.$menu-color;

		a {
			@include m.flex-center;
			@include m.double-border(
				v.$page-links-border-color1,
				v.$page-links-border-color2
			);
			background-color: v.$page-links-color;
			color: white;
		}

		a:hover {
			@include m.double-border(
				v.$page-links-border-color2,
				v.$page-links-border-color1
			);
		}

		@include m.mobile {
			display: none;
		}
	}

	.external-links {
		display: flex;
		gap: v.$header-icon-spacing;
		justify-content: right;
	}

	.banner {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: auto 1fr;
		background: url('images/banner.jpg');
		background-size: cover;
		background-position: 50%;

		@include m.mobile {
			grid-template-rows: auto 1fr;
			grid-template-columns: 1fr;
			font-size: v.$medium-font-size;
		}

		p {
			@include m.flex-center;
			margin: v.$banner-margin;
			margin-left: 0;
			font-size: v.$large-font-size;
			font-weight: bold;
			line-height: 2;
			color: white;
			text-shadow: v.$description-shadow;

			@include m.mobile {
				margin: v.$banner-margin-mobile;
				margin-top: 0;
				font-size: v.$medium-font-size;
			}
		}
	}

	.profile {
		@include m.flex-center;
		width: 100%;
		height: 100%;

		img {
			@include m.content-border;
			border-width: v.$border-size * 2;
			width: v.$profile-size;
			height: auto;
			margin: v.$banner-margin;
		}

		@include m.mobile {
			img {
				width: v.$profile-size-mobile;
				margin: v.$banner-margin-mobile;
			}
		}
	}

	footer {
		padding: v.$window-spacing * 2 0;
		font-size: v.$large-font-size;
		line-height: 1.5;
		text-align: center;
		color: white;

		a {
			color: v.$window-border-color1;

			&:hover {
				color: v.$window-color;
			}
		}
	}
</style>
