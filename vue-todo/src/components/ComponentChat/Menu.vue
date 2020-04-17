<template>
  <div>
    <div>第二层 Menu ( 点击以下menu )</div>
    <div>
      来自Layout的menus数据
      <div v-for="(menu, key) in menus" :key="key" @click="menusClick(menu)">{{ menu }}</div>
    </div>
    <table>
      <tbody>
        <tr>
          <td>
            <ListA />
          </td>
          <td>
            <ListB />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import ListA from './ListA'
import ListB from './ListB'
export default {
  name: 'Menu',
  props: ['menus'],
  components: {ListA, ListB},
  data () {
    return {}
  },
  methods: {
    menusClick (menu) {
      this.$emit('menusClickCb', menu)
    }
  }
}
</script>
<style lang="css" scoped>
table {
  margin: 0 auto;
  border: 1px solid #999;
}
</style>
