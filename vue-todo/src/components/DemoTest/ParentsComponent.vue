<template>
<div>
  <ChildComponent jt-props :dt-props="false"></ChildComponent>
</div>
</template>
<script>
import ChildComponent from './ChildComponent.vue'
export default {
  name: 'ParentsComponent',
  props: ['jtProps', 'dtProps'],
  components: { ChildComponent },
  data () {
    return {
      msg: 'I am a parent component'
    }
  }
}
</script>
