<template>
  <div>
    <h4>全局注册组件，直接引用</h4>
    <my-global-component />
    <h4>局部注册组件，components 选项中定义要使用的组件</h4>
    <hello-world></hello-world>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'UseComponent',
  components: { HelloWorld },
  data () {
    return {}
  }
}
</script>
<style>
</style>
