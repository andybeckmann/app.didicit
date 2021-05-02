<template>
	<div id="app">
		<AppHeader />
		<div class="app--main">
			<transition name="slideFade" mode="out-in">
				<router-view/>
			</transition>
		</div>
		<AppFooter />
	</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
	components: {
		AppHeader, AppFooter
	}
}
</script>

<style lang="scss">
	// Global styles
	* {
		box-sizing: border-box;
	}

	body {
		padding: 0;
		margin: 0;
	}

	label {
		text-transform: uppercase;
		font-size: 14px;
		font-weight: bold;
		margin-bottom: 5px;
		display: inline-block;
	}

	input {
		background: #fff;
		padding: 15px 20px;
		margin: 0 0 10px;
		outline: none;
		border: none;
		font-size: 19px;
		width: 100%;
		border-radius: 4px;
		display: block;
		border: 1px solid #bbb;
		box-shadow: 	
					0 5px 5px rgb(0 0 0 / 0.05),
					inset 0px 5px 5px #eee;

		@media (min-width: 768px) {
			max-width: 540px;
		}

		&:focus {
			border: 1px solid #3d424b;
		}
	}

	button {
		font-size: 19px;
		padding: 15px 20px;
		margin: 10px 10px 10px 0;
		border-radius: 4px;
		outline: none;
		border: none;
		color: #fff;
		font-weight: bold;
		background: #3d424b;
		border: 1px solid #3d424b;
		transition: .5s ease background;
		cursor: pointer;
		width: 100%;

		@media (min-width: 768px) {
			width: auto;
		}

		&:hover {
			background: #242a34;
		}
	}

	p {
		font-size: 18px;
		line-height: 27px;
	}

	a {
		text-decoration: none;
		color: #222831;
	}

	// #app styles
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background: #eaeef3;
		color: #222831;
		position: relative;
		padding-bottom: 75px;
		min-height: 100vh;

		.app--main {
			max-width: 685px;
			margin: 0 auto;
			padding: 25px;
			border-radius: 4px;

			@media (min-width: 768px) {
				padding: 25px 0;
			}
		}
	}

	// #app transitions
	.slideFade-enter-active, .slideFade-leave-active {
		transition: opacity .75s, transform .75s
	}

	.slideFade-enter, .slideFade-leave-to {
		opacity: 0;
		transform: translateX(-25%);
	}
</style>
