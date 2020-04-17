<template>
  <div>
    parent-num's value is : {{ num }}
    <a-component :num=num @numberChange="updateNumberHandler"/>
  </div>
</template>
<script>
import AComponent from './AComponent'
export default {
  name: 'BComponent',
  components: { AComponent },
  data () {
    return {
      num: 0
    }
  },
  methods: {
    updateNumberHandler (newNumber) {
      this.num = newNumber
    }
  }
}
</script>
