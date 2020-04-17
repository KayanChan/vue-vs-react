<template>
  <div>
    <ClassComponent class="border" />
    <StyleComponent />
  </div>
</template>
<script>
import ClassComponent from './ClassComponent'
import StyleComponent from './StyleComponent'
export default {
  name: 'ClassStyle',
  components: { ClassComponent, StyleComponent },
  data () {
    return {}
  }
}
</script>
<style lang="css" scoped>
.border {
  border: 1px solid #999;
}
</style>
