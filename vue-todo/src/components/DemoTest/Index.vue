<template>
  <div>
    <ParentsComponent />
    <BComponent />
  </div>
</template>
<script>
import ParentsComponent from './ParentsComponent.vue'
import BComponent from './BComponent'
export default {
  name: 'DemoTest',
  components: {ParentsComponent, BComponent},
  data () {
    return {}
  }
}
</script>
