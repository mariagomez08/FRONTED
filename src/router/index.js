import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Registro from '../views/Registro.vue'
import Buscar from '../views/Buscar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/buscar',
    name: 'buscar',
    component: Buscar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
