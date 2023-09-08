import request from '@/utils/request'

// 登录接口
export const loginApi = (data) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

/*
获取用户基本信息
*/
export const userInfoApi = () => {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

/*
获取员工的基本信息
*/
export const userBaseInfoApi = (id) => {
  return request({
    url: `/sys/user/${id}`,
    method: 'get'
  })
}
