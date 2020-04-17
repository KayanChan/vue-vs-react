<template>
  <div>
    <h4>生命周期</h4>
    <div v-for="(item, key) in lifecycles" :key="key">{{key+1}}.{{item}}</div>
  </div>
</template>
<script>
export default {
  name: 'Lifecycle',
  data () {
    return {
      lifecycles: [
        'beforeCreate: 初始化事件和生命周期，但DOM和数据都没有初始化'
      ]
    }
  },
  beforeCreate () {
    console.log('-- beforeCreate --')
    // 无法push，data没初始化
    // this.lifecycles.push('beforeCreate')
  },
  created () {
    console.log('-- created --')
    this.lifecycles.push('created: 初始化注入和校验，数据data初始化完成')
  },
  beforeMount () {
    console.log('-- beforeMount --')
    this.lifecycles.push('beforeMount: 初始化数据，虚拟DOM已生成，但是DOM未完成挂载，双向绑定还是显示{{}}')
  },
  mounted () {
    console.log('-- mounted --')
    this.lifecycles.push('mounted: 数据和DOM完成挂载')
  },
  beforeUpdate () {
    console.log('-- beforeUpdate --')
    this.lifecycles.push('beforeUpdate: 页面数据触发更新之前')
    // 避免卡死，在此处处理
    this.lifecycles.push('updated: 页面数据触发更新之后，这里操作数据容易引起卡死')
  },
  updated () {
    console.log('-- updated --')
    // this.lifecycles.push('updated: 页面数据触发更新之后，这里操作数据容易引起卡死')
  },
  beforeDestroy () {
    console.log('-- beforeDestroy --')
    this.lifecycles.push('beforeDestroy: 组件销毁之前，还是可以访问data和method')
  },
  destroyed () {
    console.log('-- destroyed --')
    this.lifecycles.push('destroyed: 组件离开销毁的时候触发，可进行取消事件监听、定时器、请求等')
  }
}
</script>
