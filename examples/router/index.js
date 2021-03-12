import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/button',
    name: 'Button',
    component: () => import('../views/ButtonTest.vue')
  },
  {
    path: '/alert',
    name: 'Alert',
    component: () => import('../views/AlertTest.vue')
  },
  {
    path: '/badge',
    name: 'Badge',
    component: () => import('../views/BadgeTest.vue')
  },
  {
    path: '/checkbox',
    name: 'CheckBox',
    component: () => import('../views/CheckBoxTest.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('../views/InputTest.vue')
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import('../views/LinkTest.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('../views/RadioTest.vue')
  },
  {
    path: '/slider',
    name: 'Slider',
    component: () => import('../views/SliderTest.vue')
  },
  {
    path: '/switch',
    name: 'Switch',
    component: () => import('../views/SwitchTest.vue')
  },
  {
    path: '/tag',
    name: 'Tag',
    component: () => import('../views/TagTest.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/MenuTest.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
