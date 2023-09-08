import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress' // 引入一份进度条插件
import 'nprogress/nprogress.css' // 引入进度条样式
// 1.本地存储中拿到token
// 2.如果有token，路由中包含登录，跳转到首页；路由中包含其他值，正常放行
// 3.如果没有token,访问白名单里的页面，正常放行；访问其他页面，跳转到登录页
const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  // 开启进度条
  NProgress.start()
  const token = store.getters.token
  if (token) {
    // 有token
    if (to.path === '/login') {
      next('/')
    } else {
      if (Object.keys(store.state.user.userInfo).length <= 0) {
        store.dispatch('user/getUserInfo').then((res) => {
          next()
        })
      } else {
        next()
      }
    }
  } else {
    // 没有token
    console.log('没有token')
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done()
})

router.afterEach((to, from) => {
  NProgress.done()
})
