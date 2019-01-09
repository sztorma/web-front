import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/Main'
import Projects from '@/components/Projects'
import Contact from '@/components/main/Contact'
import ManageVisitor from '@/components/visitor/ManageVisitor'



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
    },
    {
      path: '/managevisitor',
      name: 'ManageVisitor',
      component: ManageVisitor
    }
  ]
})
