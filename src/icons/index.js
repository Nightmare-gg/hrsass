import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// register globally
Vue.component('svg-icon', SvgIcon)
// require.context解决的问题：就是有规律的文件一个个导入的痛点
// require.context有三个参数
// 1.要查找文件的路径
// 2.是否要查找子目录
// 表示查找哪些文件
const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
