import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, logout } from '@/api/login'

const user = {
    state: {
        token: getToken()
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },
    actions: {
        Login({ commit }, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                login(username, userInfo.password, 'WEB').then(response => {
                    const token = response.data.restbody.jsessionId
                    console.log('token = ', token)
                    setToken(token)
                    commit('SET_TOKEN', token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        LogOut({ commit, state }) {
            return new Promise((resolve, reject) => {
                logout().then(response => {
                    commit('SET_TOKEN', '')
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user