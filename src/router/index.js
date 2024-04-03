import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Container from "@/layouts/Container.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: Container,
      children: [
        {
            path: "",
            name: "Home",
            components: {
                default: () => import("@/views/Home.vue")
            },
            meta: { title: "Home" }
        },
        {
            path: "/shop",
            name: "Shop",
            components: {
                default: () => import("@/views/Shop.vue")
            },
            meta: { title: "Shop" }
        },
        {
            path: "/cart",
            name: "Cart",
            components: {
                default: () => import("@/views/Cart.vue")
            },
            meta: { title: "Cart" }
        },
    ]
    },
  ]
})

export default router
