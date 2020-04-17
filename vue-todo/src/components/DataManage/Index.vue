<template>
  <div>
    <SelfData />
    <ParentsData :name="name" is-parents :is-child="false" />
  </div>
</template>
<script>
import SelfData from './SelfData'
import ParentsData from './ParentsData'
export default {
  name: 'DataManage',
  components: { SelfData, ParentsData },
  data () {
    return {
      name: 'Mark'
    }
  }
}
</script>
