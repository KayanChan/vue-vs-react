<template>
  <div>
    <div>ParentDemo</div>
    <ChildDemo ref="child"/>

    <form ref="form">
      <input ref="input" type="text" v-model="name" required>
    </form>
  </div>
</template>
<script>
import ChildDemo from './ChildDemo.vue'
export default {
  name: 'ParentDemo',
  components: { ChildDemo },
  data () {
    return {}
  },
  mounted () {
    console.log('----$root----')
    console.log(this.$root)
    console.log('----$ref - component----')
    console.log(this.$refs.child)
    console.log('----$ref - DOM----')
    console.log(this.$refs.form)
    console.log(this.$refs.input.focus())
  }
}
</script>
