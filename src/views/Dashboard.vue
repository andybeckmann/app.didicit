<template>
	<div>
		<form class="app-dashboard-add" @submit.prevent="addItem">
			<label>Keep learning</label>
			<div>
				<input v-model="description" placeholder="So, what's next?">
				<button>Add</button>
			</div>
		</form>
		<ul class="app--dashboard-items" v-if="userItems.length != 1">
			<li 
				v-for="(item, index) in userItems" 
				:key="index" 
				:index="index"
				ref="item" 
				:class="{ 'completed' : item.completed }">
				<button 
					@click="toggleItemStatus(index, item.description, item.completed)" 
					:data-key="item" 
					:class="{ 'completed' : item.completedToday }"
				></button>
				{{ item.description }}
				<button 
					class="delete"
					@click="deleteItem(index)" 
					:data-key="item"
				>&times;
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
	import firebase from 'firebase'

	export default {
		data () {
			return {
				description: '',
				completed: false,
				userItems: [
					{ 
						description: '',
						completed: false
					}
				]
			}
		},

		methods: {
			addItem () {
				firebase.database().ref('users').child(this.user.uid)
					.push(
						{ 
							description: this.description,
							completed: false
						}
					)
				this.description = null
			},

			deleteItem (index) {
				firebase.database().ref('users').child(this.user.uid + '/' + index)
					.remove()
			},

			toggleItemStatus(index, description, completed) {
				firebase.database().ref('users').child(this.user.uid + '/' + index)
					.update(
						{
							description: description, 
							completed: !completed 
						}
					)
			}
		},

		created () {
			firebase.auth().onAuthStateChanged(user => { 
				this.user = user
				if (user) {
					firebase.database().ref('users').child(user.uid).on('value', snapshot => {
						if (snapshot.val()) {
							this.userItems = snapshot.val()
						}
					})
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	form {
		input {
			display: inline-block;
			margin-right: 15px;
		}
	}

	.app--dashboard-items {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		flex-flow: column-reverse;

		li {
			padding: 25px 25px 25px 75px;
			box-shadow: 0 5px 5px rgb(0 0 0 / 5%);
			border-radius: 4px;
			font-size: 22px;
			line-height: 33px;
			margin: 0;
			position: relative;
			background: linear-gradient(70deg, #fff, #fefefe);
			margin-bottom: 5px;
			transition: .5s ease opacity;

			&.completed {
				opacity: 0.25;

				button {
					background: #3d424b;
				}
			}

			button {
				position: absolute;
				left: 25px;
				top: 17px;
				border-radius: 50%;
				width: 25px;
				height: 25px;
				display: block;
				padding: 0;
				border: 4px solid #3d424b;
				background: transparent;

				&.completed {
					background: #3d424b;
				}

				&.delete {
					right: 25px;
					left: unset;
					background: transparent;
					color: #ccc;
					border: 0;
					top: 13px;
					font-size: 30px;
				}
			}
		}
	}

	.app-dashboard-add {
		text-align: center;
		padding: 0 0 25px;

		@media (min-width: 768px) {
			padding: 0 25px 25px;
		}

		button {
			margin-right: 0;
		}
	}
</style>