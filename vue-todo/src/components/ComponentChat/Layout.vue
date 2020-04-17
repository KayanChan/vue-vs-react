<template>
<div>
  <div>第一层 Layout</div>
  当前menu: {{ currentMenu }}
  <Menu :menus="menus" @menusClickCb="menuChange" />
</div>
</template>
<script>
import Menu from './Menu'
export default {
  name: 'Layout',
  provide: {
    theme: 'dark'
  },
  components: { Menu },
  data () {
    return {
      currentMenu: '',
      menus: [
        'menu1',
        'menu2',
        'menu3'
      ]
    }
  },
  methods: {
    menuChange (menu) {
      this.currentMenu = menu
    }
  }
}
</script>
