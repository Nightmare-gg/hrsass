import { loginApi } from '@/api/user'
import { setToken, getToken } from '@/utils/auth'

const state = {
  token: getToken() || ''
}

const mutations = {
  setToken(state, newToken) {
    state.token = newToken
    setToken(newToken)
  }
}

const actions = {
  login(context, data) {
    return new Promise((resolve, reject) => {
      loginApi(data).then((res) => {
        const token = res.data.data
        context.commit('setToken', token)
        resolve(res)
      })
    })
  }
}

const getters = {}

export default { namespaced: true, state, mutations, actions, getters }
