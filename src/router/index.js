import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component:  () => import('../views/Home.vue'),
    },
    {
        path: "/account",
        name: "Account",
        component: ()=> import('../views/Account.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router