<template>
  <div>
    <h4>通过props接收父层数据</h4>
    {{ parentsName }} {{ isParentsChild }} {{ isChildChild }}
  </div>
</template>
<script>
export default {
  name: 'ParentsData',
  props: ['name', 'isParents', 'isChild'],
  data () {
    return {
      parentsName: this.name,
      isParentsChild: this.isParents,
      isChildChild: this.isChild
    }
  }
}
</script>
