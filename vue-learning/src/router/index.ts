import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import Name from '../views/Name.vue'
import Age from '../views/Age.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      test: About
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    redirect: {
      name: 'user',
      params: {
        id: 345
      }
    }
  },
  {
    path: '/user/:id',
    name: 'user',
    components: {
      default: User,
      about: About
    },
    children: [
      {
        path: 'name',
        name: 'name',
        component: Name
      },
      {
        path: 'age',
        name: 'age',
        component: Age
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

