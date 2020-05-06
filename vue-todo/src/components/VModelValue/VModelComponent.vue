<template>
  <div>
    <input type="text" v-model="msg" @input="onInput">
  </div>
</template>
<script>
export default {
  name: 'VModelComponent',
  props: ['value'],
  data () {
    return {
      msg: this.value
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
