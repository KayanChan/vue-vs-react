<template>
  <div>
    style可以传对象、数组
    <div :style="{ fontWeight: bold, fontSize: fontSize + 'px' }">style</div>
    <div :style="[colorStyle, fontSizeStyle]">style</div>
  </div>
</template>
<script>
export default {
  name: 'StyleComponent',
  data () {
    return {
      bold: 'bold',
      fontSize: 16,
      colorStyle: {
        color: 'orange'
      },
      fontSizeStyle: {
        fontSize: '16px'
      }
    }
  }
}
</script>
