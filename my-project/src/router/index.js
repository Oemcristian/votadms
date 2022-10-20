import { createWebHistory, createRouter } from "vue-router"
import Login from "../views/Login.vue"
import Votar from "../views/Votar.vue"
import Resultado from "../views/Resultado.vue"

const routes = [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
        path: '/votar',
        name: "Votar",
        component: Votar,
      },
      {
        path: '/resultado',
        name: "Resultado",
        component: Resultado,
      },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router