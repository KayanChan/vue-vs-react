<template>
  <div>
    <VModel />
    <Modifier />
    <VModelComponent v-model="message"/>
  </div>
</template>
<script>
import VModel from './VModel'
import Modifier from './Modifier'
import VModelComponent from './VModelComponent'
export default {
  name: 'VModelValue',
  components: { VModel, Modifier, VModelComponent },
  data () {
    return {
      message: 'hello world'
    }
  },
  watch: {
    message (newValue) {
      console.log(newValue)
    }
  }
}
</script>
