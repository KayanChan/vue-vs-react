<template>
  <div @click="numberPlus">click child-number: {{number}}</div>
</template>
<script>
export default {
  name: 'AComponent',
  props: ['num'],
  data () {
    return {
      number: this.num
    }
  },
  methods: {
    numberPlus () {
      this.number++
      this.$emit('numberChange', this.number)
    }
  }
}
</script>
