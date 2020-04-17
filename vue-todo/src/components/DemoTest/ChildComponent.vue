<template>
<div>
  <p>来自父亲的静态props: {{jtProps}}, 动态props: {{dtProps}}</p>
  {{msg}}
</div>
</template>
<script>
export default {
  name: 'ChildComponent',
  props: ['jtProps', 'dtProps'],
  data () {
    console.log(this.jtProps, this.dtProps) // true, false
    return {
      msg: 'I am a child component'
    }
  }
}
</script>
