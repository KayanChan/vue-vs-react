<template>
  <div>
    <div>name: {{ person.name }}</div>
    <div>age: {{ age }} years old</div>
    <button @click="sayHi">say hi</button>
    <button @click="sayHello">say hello</button>
  </div>
</template>
<script>
import mixin from './mixin'
export default {
  name: 'LogicReuse',
  mixins: [mixin],
  data () {
    return {
      person: {
        name: 'Lucy',
        born: 2000
      }
    }
  },
  computed: {
    age () {
      return (new Date()).getFullYear() - this.person.born
    }
  },
  created () {
    console.log('component created')
  },
  mounted () {
    console.log('component mounted')
  },
  methods: {
    sayHi () {
      console.log(`${this.person.name} said hi not ${this.msg}`)
    }
  }
}
</script>
