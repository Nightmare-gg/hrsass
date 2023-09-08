import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// 请求拦截
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (!res.success) {
      Message.error(res.message)
      return Promise.reject(new Error(res.message))
    }
    return res
  },
  (error) => {
    const { response } = error
    // 处理token过期的情况
    if (response.status === 401 && response.data.code === 10002) {
      store.dispatch('user/logout')
      router.push('/login')
    }
    Message.error(error.message)
    return Promise.reject(error)
  }
)

export default service
