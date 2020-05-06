export default {
  data () {
    return {
      msg: 'Hello wolrd'
    }
  },
  computed: {
    sayWord () {
      return `${this.person.name} said ${this.msg}`
    }
  },
  created () {
    console.log('mixin created')
  },
  mounted () {
    console.log('mixin mounted')
  },
  methods: {
    sayHello () {
      console.log(this.sayWord)
    }
  }
}
