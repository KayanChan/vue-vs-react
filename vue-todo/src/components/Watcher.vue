<template>
  <div>
    <input type="text" v-model="text" placeholder="输入后1秒成为历史输入记录"/>
    <h4>历史输入记录:</h4>
    <div v-for="(item, index) in history" :key="index">{{ item }}</div>
    <input type="text" v-model="student.firstName" placeholder="输入英文姓">
    {{ student.name }}
  </div>
</template>
<script>
const _ = require('lodash')
export default {
  name: 'Watcher',
  data () {
    return {
      text: '',
      history: [],
      student: {
        firstName: 'Chan',
        secondName: 'Andy'
      }
    }
  },
  watch: {
    text (newValue) {
      this.debounceAddHistory(newValue)
    },
    student: {
      handler (newValue) {
        console.log('student watcher')
        this.student.name = `${newValue.firstName} ${this.student.secondName}`
      },
      immediate: true,
      deep: true
    }
  },
  created () {
    this.debounceAddHistory = _.debounce(this.addHistory, 1000)
  },
  methods: {
    addHistory (value) {
      if (value) {
        this.history.push(value)
        this.text = ''
      }
    }
  }
}
</script>
