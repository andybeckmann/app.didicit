<template>
	<div>
		<div class="app--primary-header">
			<AppLogo />
			<AppNav :user="this.authUser" />
		</div>
	</div>
</template>

<script>
	import AppLogo from '@/components/AppLogo.vue'
	import AppNav from '@/components/AppNav.vue'

	import firebase from 'firebase'

	export default {

		data () {
			return {
				authUser: null,
				userData: null
			}
		},

		components: {
			AppLogo, AppNav
		},

		methods: {
			updateUserData () {
				firebase.database().ref('users').child(this.authUser.uid)
					.update({userData: this.userData})
			},

			signOut () {
				firebase.auth().signOut()
				.then( () => {
					this.$router.push({ name: 'Settings' })
				})
			}
		},

		created () {
			firebase.auth().onAuthStateChanged(user => { 
				this.authUser = user
				if (user) {
					firebase.database().ref('users').child(user.uid).on('value', snapshot => {
						if (snapshot.val()) {
							this.userData = snapshot.val().userData
							this.$set(this.authUser, 'userData', this.userData)
						}
					})
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.app--primary-header {
		display: flex;
		justify-content: space-between;
		background: #242a34;
	}
</style>