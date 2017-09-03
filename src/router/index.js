import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
const Photo = resolve => require(['@/components/Photo.vue'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    }
  ]
})
