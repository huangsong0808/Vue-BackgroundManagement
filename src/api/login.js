import fetch from '@/utils/fetch'
import md5 from 'md5'

export function login(loginName, password, ip, loginType) {
    return fetch({
        url: '/authorization/login',
        method: 'post',
        data: {
            loginName,
            password: md5(password),
            ip,
            loginType
        }
    })
}

export function logout() {
    return fetch({
        url: '/authorization/logout',
        method: 'post'
    })
}