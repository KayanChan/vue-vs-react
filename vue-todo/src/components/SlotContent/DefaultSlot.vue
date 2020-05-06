<template>
  <div>
    <slot>你不设置分发内容时就会显示</slot>
  </div>
</template>
<script>
export default {
  name: 'DefaultSlot',
  data () {
    return {}
  }
}
</script>
