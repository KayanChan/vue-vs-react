<template>
  <div>
      <div>第三层 ListA</div>
      <div>来自Layout的共享的数据：{{ theme }}</div>
  </div>
</template>
<script>
export default {
  name: 'ListA',
  inject: ['theme'],
  data () {
    return {}
  }
}
</script>
