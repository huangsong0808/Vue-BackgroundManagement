import { getToken, setToken } from '@/utils/auth'
import { login } from '@/api/login'

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
                login(username, userInfo.password, '191.191.16.16', 'WEB').then(response => {
                    const token = response.data.restbody.jsessionId
                    console.log('token = ', token)
                    setToken(token)
                    commit('SET_TOKEN', token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user