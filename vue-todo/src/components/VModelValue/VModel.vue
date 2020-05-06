<template>
  <div>
    <h4>v-model语法糖 vs value</h4>
    <div class="row">
      <input type="text" v-model="inputMsg" />
    </div>
    <div class="row">
      <textarea
        cols="30"
        rows="10"
        :value="textareaMsg"
        @input="onTextareaMsgInput"
      ></textarea>
    </div>
    <div class="row">
      <input type="checkbox" id="apple" value="apple" v-model="checkboxCtrl">
      <label for="apple">apple</label>
      <input type="checkbox" id="orange" value="orange" v-model="checkboxCtrl">
      <label for="orange">orange</label>
    </div>
    <div class="row">
      <input type="radio" name="sex" id="male" value="male" @change="onSexChange">
      <label for="male">male</label>
      <input type="radio" name="sex" id="female" value="female" @change="onSexChange">
      <label for="female">female</label>
    </div>
    <div class="row">
      <select v-model="selectA">
        <option value="a1">a1</option>
        <option value="a2">a2</option>
        <option value="a3">a3</option>
      </select>
    </div>
    <div class="row">
      <select :value="selectB" @change="onSelectChange">
        <option value="b1">b1</option>
        <option value="b2">b2</option>
        <option value="b3">b3</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VModel',
  data () {
    return {
      inputMsg: '',
      textareaMsg: '',
      checkboxCtrl: [],
      sex: '',
      selectA: 'a1',
      selectB: 'b1'
    }
  },
  watch: {
    inputMsg (newValue) {
      console.log(newValue)
    },
    textareaMsg (newValue) {
      console.log(newValue)
    },
    checkboxCtrl (newValue) {
      console.log(newValue)
    },
    sex (newValue) {
      console.log(newValue)
    },
    selectA (newValue) {
      console.log(newValue)
    },
    selectB (newValue) {
      console.log(newValue)
    }
  },
  methods: {
    onTextareaMsgInput (e) {
      this.textareaMsg = e.target.value
    },
    onSexChange (e) {
      if (e.target.checked) this.sex = e.target.value
    },
    onSelectChange (e) {
      this.selectB = e.target.value
    }
  }
}
</script>
<style scoped>
  .row {
    margin: 10px 0;
  }
</style>
