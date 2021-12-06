import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Routes
// Admin Dasboard
const NewProduct = () => import("../components/NewProduct/Main.vue")
// // Home Routes
const Home = () => import("@/components/Home/Main.vue")
// // About Routes
const About = () => import("@/components/About/Main.vue")
// // Resources Routes
const Categories = () => import("@/components/Categories/Main.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
  },
  {
    path: '/new-product/:product_id',
    name: 'NewProduct',
    component: NewProduct
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
