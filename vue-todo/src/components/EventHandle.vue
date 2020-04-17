<template>
  <div>
    <div v-on:click="stopEvent($event, 'div')">
      <a v-on:click.stop="stopEvent($event, 'a')">阻止单击事件冒泡</a>
    </div>
    <a href="http://www.baidu.com" @click.prevent="preventEvent">阻止超链接默认跳转到百度</a>
    <div>
      <input type="text" @keyup.enter="enterEvent" placeholder="按下enter">
    </div>
    <hr>
    <h4>事件列表</h4>
    <div v-for="(item, key) in events" :key="key">{{item}}</div>
  </div>
</template>
<script>
export default {
  name: 'EventHandle',
  data () {
    return {
      events: []
    }
  },
  methods: {
    stopEvent ($event, param) {
      console.log(param)
      this.events.push('你阻止事件冒泡了')
    },
    preventEvent () {
      this.events.push('你阻止默认事件了')
    },
    enterEvent () {
      this.events.push('你按了enter了')
    }
  }
}
</script>
