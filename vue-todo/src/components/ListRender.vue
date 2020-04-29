<template>
<div>
  <div>
    <h6 v-for="(item, index) in list" :key="index">{{ item.name }}</h6>
  </div>
  <div>
    <span v-for="(value, key, index) in student" :key="index">
      {{ index }}.{{ key }}: {{ value }}
    </span>
  </div>
</div>
</template>
<script>
export default {
  name: 'ListRender',
  data () {
    return {
      list: [
        {id: 1, name: 'a'},
        {id: 2, name: 'b'}
      ],
      student: {
        name: 'May',
        age: 5,
        sex: 'female'
      }
    }
  }
}
</script>
