import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScenariosView from '../views/ScenariosView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/scenarios',
    name: 'Scenarios',
    component: ScenariosView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  },
  // 添加针对各个section的路由
  {
    path: '/#home',
    name: 'HomeSection',
    component: HomeView
  },
  {
    path: '/#applications',
    name: 'ApplicationsSection',
    component: HomeView
  },
  {
    path: '/#projects',
    name: 'ProjectsSection',
    component: HomeView
  },
  {
    path: '/#data',
    name: 'DataSection',
    component: HomeView
  },
  {
    path: '/#team',
    name: 'TeamSection',
    component: HomeView
  },
  {
    path: '/#contact',
    name: 'ContactSection',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router