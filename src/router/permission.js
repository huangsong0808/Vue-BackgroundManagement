import router from '@/router'
// import store from '@/store'
import { getToken } from '@/utils/auth'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    // 如果有 token
    if (getToken()) {
        // 有 Token 不允许去 login 页面
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        // 放行 login 路径
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})