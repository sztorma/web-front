import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
