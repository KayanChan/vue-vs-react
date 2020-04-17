<template>
  <div>
      <h4>组件之间通信</h4>
      <Layout />
  </div>
</template>
<script>
import Layout from './Layout'
export default {
  name: 'ComponentChat',
  components: { Layout },
  data () {
    return {}
  }
}
</script>
