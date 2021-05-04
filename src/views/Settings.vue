<template>
	<div>
		<div class="app--main-settings" v-if="authUser">
			<div class="app--main-settings-menu"><p>Signed in as: <b>{{ authUser.email }}</b></p><button @click="signOut">Sign out</button></div>
			<form @submit.prevent="updateEmail">
				<h2>Update Email</h2>
				<label>E-mail</label>
				<div>
					<input v-model="email" placeholder="Your Email">
					<button>Update</button> <span class="form-success" v-if="emailHasBeenUpdated">Your E-mail has been updated</span><span class="form-error" v-if="emailIsInvalid">{{ emailErrorMessage }}</span>
				</div>
			</form>
			<form @submit.prevent="updatePassword">
				<h2>Update Password</h2>
				<label>New Password</label>
				<div>
					<input v-model="newPassword" type="password" placeholder="••••••••••">
					<button>Update</button> <span class="form-success" v-if="passwordHasBeenUpdated">Your password has been updated</span><span class="form-error" v-if="passwordIsInvalid">{{ passwordErrorMessage }}</span>
				</div>
			</form>
		</div>
		<div class="app--main-auth" v-else>
			<div class="app--main-auth-error-message" v-if="signInInvalid">E-mail or password invalid</div>
			<div class="app--main-auth-signup" v-if="registered == false">
			<h1>Register</h1>
				<form @submit.prevent="register">
					<label for="email">Email</label>
					<input type="email" v-model="email" placeholder="account@domain.com" />
					<label for="password">Password</label>
					<input type="password" v-model="password" placeholder="••••••••••" />
					<div>
						<button>Submit</button>
						<p>Already have an account? <a href="#" @click="registered = true">Sign in</a></p>
					</div>
				</form>
			</div>
			<div class="app--main-auth-signin" v-else>
				<h1>Sign in</h1>
				<form @submit.prevent="signIn">
					<label for="email">Email</label>
					<input type="email" v-model="email" placeholder="account@domain.com" />
					<label for="password">Password</label>
					<input type="password" v-model="password" placeholder="••••••••••" />
					<div>
						<button>Submit</button> <p>Don't have an account? <a href="#" @click="registered = false">Register</a></p>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
	apiKey: "AIzaSyDXaLMBn4kqyq9vuTEy0BDjYxW47TQFuOw",
	authDomain: "learned-4a597.firebaseapp.com",
	databaseURL: "https://learned-4a597-default-rtdb.firebaseio.com",
	projectId: "learned-4a597",
	storageBucket: "learned-4a597.appspot.com",
	messagingSenderId: "1045813171365",
	appId: "1:1045813171365:web:f3ccd0fa034e91189ca94c"
};

firebase.initializeApp(firebaseConfig);

export default {
	data () {
		return {
			email: '',
			password: '',

			authUser: null,

			registered: true,

			photoURL: null,
			displayName: null,
			newPassword: null,

			emailHasBeenUpdated: false,
			emailIsInvalid: false,
			emailErrorMessage: '',

			passwordHasBeenUpdated: false,
			passwordIsInvalid: false,
			passwordErrorMessage: '',

			signInInvalid: false,
			signInErrorMessage: '',
		}
	},

	methods: {
		register () {
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
				.catch(error => alert(error.message))
		},

		signOut () {
			firebase.auth().signOut()
		},

		signIn() {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password)
				.then(() => {
					this.$router.push('/dashboard')
				})
				.catch(error => {
					this.signInInvalid = true
					this.signInErrorMessage = error.message
				})
		},

		updateEmail () {
			this.authUser.updateEmail(this.email)
				.then(() => { 
					this.emailHasBeenUpdated = true
					this.emailIsInvalid = false 
				})
				.catch(error => {
					this.emailIsInvalid = true
					this.emailHasBeenUpdated = false
					this.emailErrorMessage = error.message
				})
		},

		updatePassword () {
			this.authUser.updatePassword(this.newPassword)
				.then(() => { 
					this.newPassword = null
					this.passwordHasBeenUpdated = true
					this.passwordIsInvalid = false
				})
				.catch(error => {
					this.passwordHasBeenUpdated = false
					this.passwordIsInvalid = true
					this.passwordErrorMessage = error.message
				})
		}
	},

	created () {
		firebase.auth().onAuthStateChanged(user => { 
			this.authUser = user

			if (user) {
				this.displayName = user.displayName,
				this.photoURL = user.photoURL
				this.email = user.email
			}
		})
	}
}
</script>

<style lang="scss" scoped>
.app--main-settings-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #eee;
	border-radius: 4px;
	padding: 5px 5px 5px 15px;
}

.app--main-settings {
	@media (min-width: 768px) {
		margin: 0 25px;
	}

	h2 {
		padding-top: 25px;
	}

	p:nth-of-type(1) {
		@media (min-width: 768px) {
			margin-top: 30px;
		}
	}

	span.form-success {
		color: #68b88d;
		font-weight: bold;
	}

	span.form-error {
		color: #d97087;
		font-weight: bold;
	}

	form {
		input {
			display: inline-block;
			margin-right: 15px;
		}
	}

	.app--main-settings-menu {
		@media (min-width: 768px) {
			display: flex;
			justify-content: space-between;
		}

		input {
			display: inline-block;
		}

		button {
			margin-right: 0;
		}
	}
}

.app--main-auth {
	max-width: 550px;
	margin: 0 auto;
	position: relative;

	.app--main-auth-error-message {
		background: #f2c0c0;
		width: calc(100% - 100px);
		position: absolute;
		top:-10px;
		padding: 15px;
		border-radius: 4px;
		text-align: center;
		opacity: 0;
		animation: errorMessageFadeIn .15s linear forwards;
	}

	@keyframes errorMessageFadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	h1 {
		font-size: 42px;
		font-weight: 200;
	}

	form {
		div {
			justify-content: space-between;
			align-items: center;

			@media (min-width: 768px) {
				display: flex;
			}

			a {
				text-decoration: none;
				font-weight: bold;
				color: #111;
			}
		}
	}
}
</style>