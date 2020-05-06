<template>
  <div>
    <slot name="header">header</slot>
    <slot>content</slot>
    <slot name="footer">footer</slot>
  </div>
</template>
<script>
export default {
  name: 'NamedSlot',
  data () {
    return {}
  }
}
</script>
