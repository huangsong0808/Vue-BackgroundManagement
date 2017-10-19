import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

import Layout from '@/views/layout/Layout'

Vue.use(Router)

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
**/

export const RouterMap = [
    { path: '/login', component: _import('login/Login'), hidden: true },
    { path: '/404', component: _import('404'), hidden: true },
    {
        path: '/',
        component: Layout,
        name: 'Dashboard',
        redirect: '/dashboard',
        hidden: true,
        children: [{ path: 'dashboard', component: _import('dashboard/Dashboard') }]
    },
    {
        path: '/box',
        component: Layout,
        redirect: 'noredirect',
        name: '盒子管理',
        icon: false,
        children: [
          { path: 'index', name: 'BoxList', icon: 'zujian', component: _import('box/Box') }
        ]
    }
]

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: RouterMap
})