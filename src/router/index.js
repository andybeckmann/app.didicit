import Vue from 'vue'
import VueRouter from 'vue-router'
import Settings from '../views/Settings.vue'
import Privacy from '../views/Privacy.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Settings',
		component: Settings
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/privacy',
		name: 'Privacy',
		component: Privacy
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
