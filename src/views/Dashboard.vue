<template>
	<div>
		<form class="app-dashboard-add" @submit.prevent="addItem">
			<label>I want to learn more about</label>
			<div>
				<input v-model="description" placeholder="What's next?">
				<button>Add</button>
			</div>
		</form>
		<ul class="app--dashboard-items">
			<li 
				v-for="(item, index) in userItems" 
				:key="index" 
				:index="index" 
				ref="item" 
				:class="{ 'completed' : item.completed }">
				<button 
					@click="toggleItemStatus(index, item.completedToday)" 
					:data-key="item" 
					:class="{ 'completed' : item.completedToday }"
				></button>
				{{ item.description }}
				<button class="delete">&times;</button>
			</li>
		</ul>
	</div>
</template>

<script>
	import firebase from 'firebase'

	export default {
		data () {
			return {
				authUser: null,
				userItems: [
					{ 
						description: '',
						id: null,
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
			},

			toggleItemStatus(index, completed) {
				firebase.database().ref('users').child(this.user.uid)
					.put(
						index,
						{
							description: this.description, 
							completed: !completed 
						}
					)
			},

			signOut () {
				firebase.auth().signOut()
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

		li {
			padding: 25px 25px 15px 65px;
			box-shadow: 0 5px 5px rgb(0 0 0 / 5%);
			border-radius: 4px;
			font-size: 22px;
			line-height: 33px;
			margin: 0;
			position: relative;

			&.completed {

			}

			button {
				position: absolute;
				left: 15px;
				top: 17px;
				border-radius: 50%;
				width: 25px;
				height: 25px;
				display: block;
				padding: 0;

				&.completed {
					background: red;
				}

				&.delete {
					right: 15px;
					left: unset;
					background: transparent;
					color: #3d424b;
					border: 0;
				}
			}
		}
	}

	.app-dashboard-add {
		text-align: center;
		padding: 25px;
	}
</style>