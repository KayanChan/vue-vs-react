<template>
  <div>{{ text }}</div>
</template>
<script>
export default {
  name: 'ChildDemo',
  data () {
    return {
      text: 'Child Component'
    }
  },
  mounted () {
    console.log('----$parent----')
    console.log(this.$parent)
  }
}
</script>
