import request from '@/utils/request'

// 登录接口
export const loginApi = (data) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
