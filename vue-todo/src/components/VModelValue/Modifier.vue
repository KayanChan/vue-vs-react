<template>
  <div class="row">
    <h4>修饰符</h4>
    <h6>.lazy</h6>
    <input type="text" v-model="msgA" placeholder="默认input事件响应"/>
    <input type="text" v-model.lazy="msgB" placeholder="lazy修饰符-change事件响应" />
    <h6>.number</h6>
    <input type="number" v-model="numberA" placeholder="输入值为字符串">
    <input type="number" v-model.number="numberB" placeholder="输入值为数值">
    <h6>.trim</h6>
    <input type="text" v-model="msgC" placeholder="默认不去掉空格"/>
    <input type="text" v-model.trim="msgD" placeholder="去掉空格" />
  </div>
</template>
<script>
export default {
  name: 'Modifier',
  data () {
    return {
      msgA: '',
      msgB: '',
      numberA: 0,
      numberB: 0,
      msgC: '',
      msgD: ''
    }
  },
  watch: {
    msgA (newValue) {
      console.log(newValue)
    },
    msgB (newValue) {
      console.log(newValue)
    },
    numberA (newValue) {
      console.log(newValue + 1)
    },
    numberB (newValue) {
      console.log(newValue + 1)
    },
    msgC (newValue) {
      console.log(newValue)
      console.log(newValue.length)
    },
    msgD (newValue) {
      console.log(newValue)
      console.log(newValue.length)
    }
  }
}
</script>
<style scoped>
  .row {
    margin: 10px 0;
  }
</style>
