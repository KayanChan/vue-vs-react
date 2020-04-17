<template>
  <div>
    <h4>组件自身数据</h4>
    <div>
      <span v-text="name"></span>: {{ age }}
      <button @click="countPlus">+1</button> <span>count: {{ count }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SelfData',
  data () {
    return {
      name: 'Yoga',
      age: 10,
      count: 0
    }
  },
  methods: {
    countPlus () {
      this.count++
    }
  }
}
</script>
