<template>
  <div>
      <div>第三层 List B</div>
      <div>来自Layout的共享的数据：{{ theme }}</div>
  </div>
</template>
<script>
export default {
  name: 'ListB',
  inject: ['theme'],
  data () {
    return {}
  }
}
</script>
