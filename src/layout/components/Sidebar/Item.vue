<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  // jsx写法
  render(h, context) {
    // 拿到传递过来的props
    const { icon, title } = context.props
    const vnodes = []
    // 设置图标
    if (icon) {
      // 如果传递过来的是element-ui的图标
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={[icon, 'sub-el-icon']} />)
      } else {
        // 如果传递过来的是自定义的图标
        vnodes.push(<svg-icon icon-class={icon} />)
      }
    }
    // 设置标题
    if (title) {
      vnodes.push(<span slot="title">{title}</span>)
    }
    return vnodes
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
