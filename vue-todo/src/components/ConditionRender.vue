<template>
  <div>
    <div v-if="type == 'A'">A</div>
    <div v-else-if="type == 'B'">B</div>
    <div v-else>C</div>
  </div>
</template>
<script>
export default {
  name: 'ConditionRender',
  data () {
    return {
      type: 'C'
    }
  }
}
</script>
