<template>
  <div>
    <div>name: {{ name }}</div>
    <div>{{ msg }} - {{ info }}</div>
    <button @click="setValue">set reversedMsg</button>
  </div>
</template>
<script>
export default {
  name: 'ComputedAttr',
  data () {
    return {
      firstName: 'Chan',
      secondName: 'Yummy',
      msg: 'abcd',
      info: ''
    }
  },
  computed: {
    name () {
      const { firstName, secondName } = this
      return `${secondName} ${firstName}`
    },
    reversedMsg: {
      get () {
        return this.msg.split('').reverse().join('')
      },
      set (newValue) {
        this.info = newValue
      }
    }
  },
  methods: {
    setValue () {
      this.reversedMsg = 'xyz'
    }
  }
}
</script>
