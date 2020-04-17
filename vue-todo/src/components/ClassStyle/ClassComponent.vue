<template>
  <div class="box">
    class可以传字符串、对象、数组
    <div class="fs16px" :class="{ bold: isBold }">class</div>
    <div :class="[colorClass, boldClass]">class</div>
  </div>
</template>
<script>
export default {
  name: 'ClassComponent',
  data () {
    return {
      isBold: true,
      colorClass: 'orange',
      boldClass: 'bold'
    }
  }
}
</script>
<style lang="css" scoped>
.box {
  margin: 0 auto;
  width: 300px;
}
.fs16 {
  font-size: 16px;
}
.bold {
  font-weight: bold;
}
.orange {
  color: orange;
}
</style>
