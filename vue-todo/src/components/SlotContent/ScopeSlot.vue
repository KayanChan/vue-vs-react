<template>
  <div>
    <slot :person="person">{{ person.name }}</slot>
    <slot name="age" :person="person">{{ person.age }}</slot>
  </div>
</template>
<script>
export default {
  name: 'ScopeSlot',
  data () {
    return {
      person: {
        name: 'a',
        age: 10,
        sex: 'female',
        hobby: 'running'
      }
    }
  }
}
</script>
