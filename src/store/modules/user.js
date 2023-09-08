import { loginApi, userInfoApi, userBaseInfoApi } from '@/api/user'
import { setToken, getToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken() || '',
  userInfo: {}
}

const mutations = {
  setToken(state, newToken) {
    state.token = newToken
    setToken(newToken)
  },
  clearToken(state) {
    state.token = ''
    removeToken()
  },
  setUserInfo(state, newUserInfo) {
    state.userInfo = newUserInfo
  },
  clearUserInfo(state) {
    state.userInfo = {}
  }
}

const actions = {
  async login(context, data) {
    const res = await loginApi(data)
    const token = res.data
    context.commit('setToken', token)
    return res
  },
  async getUserInfo(context) {
    const { data } = await userInfoApi()
    const { data: data2 } = await userBaseInfoApi(data.userId)
    const baseData = { ...data, ...data2 }
    context.commit('setUserInfo', baseData)
    return baseData
  },
  logout(context) {
    context.commit('clearToken')
    context.commit('clearUserInfo')
  }
}

const getters = {}

export default { namespaced: true, state, mutations, actions, getters }
