import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../components/Menu.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/Cart.vue')
  },
  {
    path: '/order/:id',
    name: 'order',
    component: () => import('../components/Order.vue')
  },
  {
    path: '/products',
    name: 'product',
    component: () => import('../components/Product.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditProduct.vue')
  }
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router