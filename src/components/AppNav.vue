<template>
	<div class="app--header-nav">
		<nav v-if="user != null">
			<ul>
				<li>
					<router-link to="/dashboard">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 123.4 123" xml:space="preserve">
							<path class="icon dashboard" d="M55,108.5L27,64.2c-1.7-2.7-0.9-6.3,1.8-8c2.7-1.7,6.3-0.9,8,1.8l17.7,14.5l40-61c1.5-2.8,5.1-3.9,7.9-2.3 c2.8,1.5,3.9,5.1,2.3,7.9L55,108.5z"/>
						</svg>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 123.4 123" xml:space="preserve">
							<path class="icon settings" d="M114.8,48h-6.6c-1-3.3-2.3-6.5-3.9-9.5l4-4c1.1-1.1,1.1-2.8,0-3.8L92.8,15.1c-1.1-1.1-2.8-1.1-3.8,0l-4,4
								c-3-1.6-6.2-3-9.5-3.9V8.6c0-1.5-1.2-2.7-2.7-2.7h-22c-1.5,0-2.7,1.2-2.7,2.7v6.6c-3.3,1-6.5,2.3-9.5,3.9l-4-4
								c-1.1-1.1-2.8-1.1-3.8,0L15.1,30.6c-1.1,1.1-1.1,2.8,0,3.8l4,4c-1.6,3-3,6.2-3.9,9.5H8.6c-1.5,0-2.7,1.2-2.7,2.7v22
								c0,1.5,1.2,2.7,2.7,2.7h6.6c1,3.3,2.3,6.5,3.9,9.5l-4,4c-1.1,1.1-1.1,2.8,0,3.8l15.5,15.5c1.1,1.1,2.8,1.1,3.8,0l4-4
								c3,1.6,6.2,3,9.5,3.9v6.2c0,1.5,1.2,2.7,2.7,2.7h22c1.5,0,2.7-1.2,2.7-2.7v-6.2c3.3-1,6.5-2.3,9.5-3.9l4,4c1.1,1.1,2.8,1.1,3.8,0
								l15.5-15.5c1.1-1.1,1.1-2.8,0-3.8l-4-4c1.6-3,3-6.2,3.9-9.5h6.6c1.5,0,2.7-1.2,2.7-2.7v-22C117.5,49.2,116.3,48,114.8,48z
								M61.7,79.3c-9.8,0-17.8-8-17.8-17.8c0-9.8,8-17.8,17.8-17.8s17.8,8,17.8,17.8C79.5,71.3,71.5,79.3,61.7,79.3z"/>
						</svg>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	props: ['user']
}
</script>

<style lang="scss" scoped>
	.app--header-nav {
		ul {
			margin: 0;
			padding: 0;
			list-style-type: none;
			display: flex;

			li:first-child a {
				border-left: 1px solid #3d424b;
			}

			a {
				font-weight: bold;
				color: #fff;
				text-decoration: none;
				padding: 25px;
				border-right: 1px solid #3d424b;
				position: relative;
				width: 75px;
				height: 75px;
				margin: 0;
				display: block;
				cursor: pointer;

				&.router-link-exact-active {
					color: #eee;
					background: #3d424b;
					border-bottom: 5px solid #ffd266;

					svg .icon {
						stroke: #ffd266;
					}
				}

				svg {
					position: absolute;
					width: 35px;
					left: 20px;
					top: 20px;
					cursor: pointer;

					.icon {
						fill: none;
						stroke: #fff;
						stroke-width: 9.5;
						stroke-miterlimit: 10;
					}
				}
			}
		}
	}
</style>
