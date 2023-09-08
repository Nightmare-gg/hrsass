export const imgerr = {
  // 当使用了这个自定义指令的标签被渲染的时候会执行inserted勾子
  // el: 表示的是使用了这个指令的标签
  // binding: 使用指令的时候传过来的标签
  inserted(el, binding) {
    // img标签有一个onerror错误事件： 执行时机，当图片加载失败的时候会执行这个onerror事件
    el.onerror = () => {
      el.src = binding.value
    }
  }
}
