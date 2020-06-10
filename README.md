# vue-vs-react
关于Vue与React的差异对比

目录
[toc]

## 背景

##### Vue
Vue.js是一套构建**用户界面**的渐进式框架。

##### React
React 是一个用于构建**用户界面**的 JavaScript 库JavaScript 库。

##### 相似之处
1. 两者都是用于创建UI的 JavaScript 库，核心库只关注视图层(框架骨架)，其他功能如路由、状态管理等是框架分离组件
2. 两者都提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件
3. 两者都使用 Virtual DOM 实现快速渲染
4. 两者都可放入单个HTML文件，或者成为webpack配置中的模块
5. 两者都是轻量级
6. 两者都有优秀的社区支持
7. 两者都有各自的构建工具，能快速搭建开发环境(Vue使用`vue-cli`, React使用`create-react-app`)

#### 不同之处
1. Vue鼓励使用HTML模板去编写(也支持JSX的写法，但不是默认的)；React则使用JSX(通用的JavaScript的语法扩展)去编写，赋予开发者更多编程能力
2. Vue组件分全局注册与局部注册；React都是通过import组件，在模块中引用
3. Vue增加了一些语法糖，如 computed 和 watch 等；React则需要自己写一套逻辑实现
4. Vue中通过data属性去管理Vue数据(大型项目data可能不适合，徐亚引入状态管理Vuex去处理)；React中需要使用 setState 去更新状态数据
5. 在手机上创建原生应用方面，React处于领先位置 => React Native；Vue社区与阿里合作开发的创建原生应用 => Weex
6. 生命周期函数的差异

## 核心思想- `Performance`
##### Vue
Vue的整体思想是经典的html(结构)+css(表现)+js(行为)的web应用；
Vue2.0通过 Object.defineProperty 实现对数据的变化监听，精准实现组件级别的更新；
Vue3.0舍弃了 Object.defineProperty ，使用 proxy 的方式通过观察者模式实现数据变化监听；

> 后续可以进行Vue2.0 与 Vue3.0的对比学习

##### React
React的整体思想是函数式编程，jsx语法，all in js；
当组件调用 setState 或 props 变化的时候，组件内部render会重新渲染，子组件也会随之重新渲染，可以通过 shouldComponentUpdate 或者 PureComponent等方式调整去避免不必要的重新渲染

class组件中，shouldComponentUpdate 和 React.PureComponent在基本类型数据传递均可起到优化作用，forceUpdate 和 shouldComponentUpdate(配合immutable.js)可以对引用类型数据传递起到优化作用

函数组件中，React.memo可以对在给定相同 props 的情况下，包裹子组件，让其跳过父层更新导致的重复渲染

## 构建工具
CLI (command-line interface) 命令行界面构建工具，可快速搭建大型单页应用

##### Vue
```bash
# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目vue-todo
$ vue init webpack vue-todo
# 安装依赖
$ cd vue-todo
$ npm install
$ npm run dev
```

##### React
```bash
# 全局安装 create-react-app
$ npm install --global create-react-app
# 构建项目 react-todo (npx是npm5.2+附带package运行工具)
$ npx create-react-app react-todo
$ cd react-todo
$ npm start
```

## 组件引用 - `UseComponent`

###### Vue
vue组件定义使用*.vue文件来表示；
vue组件将html、css、js组合到一起；
模板中可以通过`{{}}`包裹变量；
Vue组件分为 全局注册`Vue.component(tagName, options)` 和 局部注册；

```javascript
// 全局注册组件
Vue.component('myGlobalComponent', {
  template: '<div>{{msg}}</div>',
  data () {
    return {
      msg: 'myGlobalComponent'
    }
  }
})
```
```html
<template>
  <div>
    <div>{{msg}}</div>
    <h4>全局注册组件，直接引用</h4>
    <my-global-component />
    <h4>局部注册组件，components 选项中定义要使用的组件</h4>
    <hello-world></hello-world>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'UseComponent',
  components: { HelloWorld },
  data () {
    return {
      msg: 'HelloWorld'
    }
  }
}
</script>
<style>
</style>
```

##### React
React推荐使用jsx或者js文件来表示组件；
React支持 class组件 和 function组件 2种形式；
React使用`{}`包裹变量；
React组件名称必须大写字母开头，小写字母开头视为原生DOM标签；
React组件通过import引入，直接在模板中引用；

1. class组件
```jsx
import React from 'react'
import MyComponent from './components/MyComponent.jsx'
class MyClassComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      msg: 'HelloWorld'
    }
  }

  render() {
    return <div><h6>{msg}</h6><MyComponent /></div>
  }
}
export default MyClassComponent
```

2. function组件 - hooks赋予function具有管理state的能力
```jsx
import React, { useState } from 'react'
function MyFunctionConponent () {
  const [msg] = useState('HelloWorld')
  return <div><h6>{msg}</h6></div>
}
export default MyFunctionConponent
```

## 数据管理 - `DataManage`
数据管理包含来自父组件的数据 props 与 组件自身的数据；
Vue 与 React 两者都是单向数据流，即父组件流向子组件，子组件不可流向父组件；

##### Vue
子组件需要显式地通过`props`选项来声明来自父组件的数据；
Vue的props分为 静态props 和 动态props；
Vue中使用data来管理组件自身的数据，Vue将会递归data的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter，响应数据的变化；

data 必须声明为返回一个初始数据对象的函数，这样的话每个组件实例将拥有各自的data对象，不会同时引用同一个data;
组件内部更新数据可以直接通过`this.xx = 'newValue'`
受现代 JavaScript 的限制，Vue 不能检测到对象属性的添加或删除(如数组的变异方法)，即只能响应data里面已经定义好的属性，对此可以通过`Vue.set(object, key, value)`或者`vm.$set(object, key, value)`来将响应属性添加到嵌套的对象上；

> 此处可补充需要使用Vue.set更新数据的实例

```html
// 父组件
<template>
<div>
  <ChildComponent jt-props :dt-props="false"></ChildComponent>
</div>
</template>
<script>
import ChildComponent from './ChildComponent.vue'
export default {
  name: 'ParentsComponent',
  props: ['jtProps', 'dtProps'],
  components: { ChildComponent },
  data () {
    return {
      msg: 'I am a parent component'
    }
  }
}
</script>
```

```html
// 子组件
<template>
<div>
  <p>来自父亲的静态props: {{jtProps}}, 动态props: {{dtProps}}</p>
  {{msg}}
</div>
</template>
<script>
export default {
  name: 'ChildComponent',
  props: ['jtProps', 'dtProps'],
  data() {
    console.log(this.jtProps, this.dtProps) // true, false
    return {
      msg: 'I am a child component'
    }
  }
}
</script>
```

##### React
函数组件使用 props 参数获取父组件传过来的props；
class组件使用 this.props 获取父组件传过来的props；
静态props一般是字符串，动态props则用`{}`包裹变量；

React中使用 state 来管理组件自身的数据，class组件在构造函数(constructor)中定义组件内部数据 state, hooks的出现(useState)使得函数组件也具有管理state的能力(React 16.0之后)；

useState返回当前state和更新state的函数(可访问state旧值)，但是useState不会自动合并数据，而是替换数据
只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用；
只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用；

class组件修改数据不能直接修改state，直接更新某个数据使用`this.setState({data, value})`，如果需要使用state旧值/props可以使用`this.setState((state, props) => ({data, value}))`;
数组的追加可以使用es6的扩展运算符 `this.setState({ arr: [...this.state.arr, 'newVaule'] })`
class组件的 setState 更新数据是异步的，但是在setTimeout和原生事件中是同步的；
class组件更新的组件部分数据，setState 后一定会生成一个全新的 state 引用，react会自动将数据合并；

> 后续可深入学习一下 [React Hook useState 与 this.setState 细节使用和差异](http://www.ptbird.cn/react-hook-usestate-setState.html)

```jsx
class Child1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      number: 0
    }
    this.setName = this.setName.bind(this)
  }
  componentDidMount() {
    this.setName()
  }
  setName() {
    this.setState({
      name: 'name'
    })
  }
  numberPlus() {
    this.setState((state, props) => {
      return {
        number: state.number + 1
      }
    })
  }
  render() {
    const { age } = this.props
    return <div onClick={() => this.numberPlus()}>{ this.state.name }: { age }</div>
  }
}

// 父组件引用
<Child1 age={ this.state.age }/>
```

```jsx
import React, { useState } from 'react'

function Child2(props) {
  const [age, setAge] = useState(10)
  return <div>{props.name}: {age} <button onClick={() => setAge(age => age+1)}>+1</button></div>
}

export default Child2

// 父组件引用
<Child2 name={ this.state.name }/>
```

## 组件通信 - `ComponentChat`
组件通信主要是三个方面，父子组件互相通信，兄弟组件互相通信，跨层组件互相通信

父子组件互相通信：props + 事件
兄弟组件互相通信：通过父组件传递数据，或者事件处理
跨层组件互相通信：Vue 的 provide / inject 实现，React 通过 Context 实现

Vue通过祖先组件 provide 选项定义一个对象，其子孙组件通过 inject 选项注入依赖获得共享数据

React创建一个 Context 对象，祖先组件通过 Context.Provider 的value属性向消费组件(需要共享数据的子孙组件)传值，class(消费)组件通过 contextType 获得最近 Context 上的值，函数(消费)组件通过 Context.Comsumer 订阅Context的变更
当Provider的父组件进行重渲染时，consumers组件会重新渲染，并且没有办法避免，应该尽量避免使用Context

##### Vue
```html
// 子组件
<template>
  <div @click="numberPlus">click child-number: {{number}}</div>
</template>
<script>
export default {
  name: 'AComponent',
  props: ['num'],
  data () {
    return {
      number: this.num
    }
  },
  methods: {
    numberPlus () {
      this.number++
      this.$emit('numberChange', this.number)
    }
  }
}
</script>
```
```html
// 父组件
<template>
  <div>
    parent-num's value is : {{ num }}
    <a-component :num=num @numberChange="updateNumberHandler"/>
  </div>
</template>
<script>
import AComponent from './AComponent'
export default {
  name: 'BComponent',
  components: { AComponent },
  data () {
    return {
      num: 0
    }
  },
  methods: {
    updateNumberHandler (newNumber) {
      this.num = newNumber
    }
  }
}
</script>
```

##### React
```jsx
// 子组件
import React, { useState } from 'react'

function AComponent(props) {
  const { num, numberChange } = props
  const [ number, setNumber ] = useState(num)

  const numberPlus = () => {
    numberChange(number+1)
    setNumber(number => {
      return number+1
    })
  }
  return <div onClick={numberPlus}>click child's number: {number}</div>
}

export default AComponent
```

```jsx
// 父组件
import React, { useState } from 'react'
import AComponent from './AComponent'

function BComponent() {
  const [num, setNum] = useState(0)
  const updateNumberHandler = number => {
    console.log(number)
    setNum(number)
  }
  return (
    <div>
      parents'num is { num }
      <AComponent num={ num } numberChange={ updateNumberHandler }/>
    </div>
  )
}
export default BComponent
```

## class与style - `ClassStyle`

Vue中 class 可以传字符串、对象、数组，也可以直接绑定在组件上
Vue中 style 可以传对象、数组，会自动补齐前缀

React通过 className 来指定class，可以传字符串常量/变量，可以通过安装 classNames 库，支持传对象、数组
React的 style 接收对象，但不会自动补齐前缀

##### Vue
```html
<template>
  <div class="box">
    class可以传字符串、对象、数组
    <div class="fs16px" :class="{ bold: isBold }">class</div>
    <div :class="[colorClass, boldClass]">class</div>
  </div>
</template>
<script>
export default {
  name: 'Class',
  data () {
    return {
      isBold: true,
      colorClass: 'orange',
      boldClass: 'bold'
    }
  }
}
</script>
<style lang="css" scoped>
.box {
  margin: 0 auto;
  width: 300px;
}
.fs16 {
  font-size: 16px;
}
.bold {
  font-weight: bold;
}
.orange {
  color: orange;
}
</style>

```

```html
<template>
  <div>
    style可以传对象、数组
    <div :style="{ fontWeight: bold, fontSize: fontSize + 'px' }">style</div>
    <div :style="[colorStyle, fontSizeStyle]">style</div>
  </div>
</template>
<script>
export default {
  name: 'StyleComponent',
  data () {
    return {
      bold: 'bold',
      fontSize: 16,
      colorStyle: {
        color: 'orange'
      },
      fontSizeStyle: {
        fontSize: '16px'
      }
    }
  }
}
</script>
```

##### React
```jsx
import React from 'react'
import classNames from 'classnames'

class ClassComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      colorClass: 'App-link'
    }
  }
  render() {
    return (
      <div>
        <div className={this.state.colorClass}>class</div>
        <div className={classNames(this.state.colorClass, 'bold', {'fs16px': true}, ['orange', {box: true}])}>class</div>
      </div>
    )
  }
}

export default ClassComponent
```

```jsx
import React from 'react'

const divStyle = {
  WebkitTransition: 'all',
  color: 'orange',
  fontSize: '16px'
}
class StyleComponent extends React.Component {
  render() {
    return (
      <div style={divStyle}>style</div>
    )
  }
}

export default StyleComponent
```

## 生命周期 - `Lifecycle`
组件的生命周期：初始化、挂载、更新、销毁

Vue的生命周期：
`beforeCreate`-`created`-`beforeMount`-`mounted`-`beforeUpdate`-`updated`-`beforeDestroy`-`destroyed`

React的生命周期(V16.0之前)：
初始化阶段：`constructor`
挂载阶段：`componentWillMount`-`render`-`componentDidMount`
更新阶段：`componentWillReceiveProps`-`shouldComponentUpdate`-`componentWillUpdate`-`componentDidUpdate `
卸载阶段：`componentWillUnmount`

React的生命周期(V16.0之后):
初始化阶段：`constructor`
挂载阶段：`getDerivedStateFromProps `-`render`-`componentDidMount`
更新阶段：`getDerivedStateFromProps`-`shouldComponentUpdate`-`render`-`getSnapshotBeforeUpdate`-`componentDidUpdate`
卸载阶段：`componentWillUnmount`

## 事件处理 - `EventHandle`
#### Vue
Vue使用 v-on 指令监听DOM事件，语法糖 @；
Vue中 methods 选项中的方法可以访问原生DOM事件，通过 $event 显式传入；
Vue为事件添加事件修饰符/按键修饰符，修饰符是由点开头的指令后缀来表示的；

Vue事件修饰符：
- `.stop` 阻止事件冒泡
- `.prevent` 阻止事件默认行为
- `.capture` 添加事件监听器时使用事件捕获模式
- `.self` 当前元素触发才触发事件处理函数
- `.once` 事件只触发一次
- `.passive` 不阻止默认行为，不能和`.prevent`一起使用

Vue按键修饰符：
- `.enter`
- `.tab`
- `.delete` 删除和退格键
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`
- `.middle`
- keyCode，如enter为13
- `.ctrl`
- `.alt`
- `.shift`
- `.meta`
- `.exact` 由精确的系统修饰符组合触发的事件

```html
<template>
  <div>
    <div v-on:click="stopEvent($event, 'div')">
      <a v-on:click.stop="stopEvent($event, 'a')">阻止单击事件冒泡</a>
    </div>
    <a href="http://www.baidu.com" @click.prevent="preventEvent">阻止超链接默认跳转到百度</a>
    <div>
      <input type="text" @keyup.enter="enterEvent" placeholder="按下enter">
    </div>
    <hr>
    <h4>事件列表</h4>
    <div v-for="(item, key) in events" :key="key">{{item}}</div>
  </div>
</template>
<script>
export default {
  name: 'EventHandle',
  data () {
    return {
      events: []
    }
  },
  methods: {
    stopEvent ($event, param) {
      console.log(param)
      this.events.push('你阻止事件冒泡了')
    },
    preventEvent () {
      this.events.push('你阻止默认事件了')
    },
    enterEvent () {
      this.events.push('你按了enter了')
    }
  }
}
</script>
```

#### React
React中class组件调用方法，需要显式绑定 this 或者使用箭头函数
箭头函数可以传递参数，事件对象 e 需要显式传递
通过bind的方式传递参数，事件对象 e 将会隐式传递

```jsx
class EventHandle extends React.Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
    this.eventThree = this.eventThree.bind(this)
  }
  eventOne(target, e) {
    console.log(e)
    this.setState({
      events: [...this.state.events, target]
    })
  }
  eventTwo(e, target) {
    console.log(e)
    this.setState({
      events: [...this.state.events, target]
    })
  }
  eventThree() {
    this.setState({
      events: [...this.state.events, '事件3']
    })
  }
  eventFour = (target) => {
    this.setState({
      events: [...this.state.events, '事件4']
    })
  }
  render() {
    return (
      <div>
        <div onClick={this.eventOne.bind(this, '事件1')}>点击事件1</div>
        <div onClick={(e) => this.eventTwo(e, '事件2')}>点击事件2</div>
        <div onClick={this.eventThree}>点击事件3</div>
        <div onClick={this.eventFour}>点击事件4</div>
        <h4>事件列表：</h4>
        {
          this.state.events.map((item, key) => {
            return (<div key={key}>{ item }</div>)
          })
        }
      </div>
    )
  }
}
```

## 条件渲染 - `ConditionRender`
#### Vue
`v-if`指令条件性渲染内容，false值时不会渲染 DOM 节点，DOM显示一个注释标志
`v-if、v-else-if、v-else`需配合相邻使用
```html
<template>
  <div>
    <div v-if="type == 'A'">A</div>
    <div v-else-if="type == 'B'">B</div>
    <div v-else>C</div>
  </div>
</template>
```
#### React
React中可以通过`运算符 &&`、`三目运算符`和`if else`来处理条件渲染
```jsx
render() {
  const { showDiv, showH6, showSpan } = this.state
  const toggleShow = (isShow) => {
    if(isShow) return <span>show span</span>
    return <div>hide span</div>
  }
  return <div>
    { showDiv && <div>show div</div> }
    { showH6 ? <h6>show H6</h6> : <div>hide H6</div> }
    { toggleShow(showSpan) }
  </div>
}
```

## 元素显示控制
#### Vue
`v-show`控制显示隐藏

#### React
React通过`style`或者`class`来控制元素的显示隐藏
```jsx
<div style={{ display: isShow ? 'block' : 'none' }}>显示</div>
```

## 列表渲染 - `ListRender`
#### Vue
`v-for`渲染列表，需要设置唯一的`key`值，key值能快速对比新旧虚拟DOM树的差异
`v-for`也可以对对象进行遍历渲染，采用Object.keys的方式处理，可能不同JS引擎的效果不一致
```html
<div v-for="(item, key) in list" :key="key">{{ item }}</div>
<div v-for="(value, key, index) in obj" :key="key+index">{{ value }}</div>
```
#### React
React通过`map()`去遍历数组，不设置key标识，默认使用索引作为key值(列表项目顺序会变化的话，不建议使用索引作为key值)
对于对对象的遍历，可以`Object.key(obj).map()`或者`Object.entries(obj).map()`处理
```jsx
{ list.map((item, index) => <h6 key={index} id={item.id}>{ item.name }</h6>) }
{ Object.keys(student).map((key, index) => <span key={index}>{index}.{key}:{student[key]} </span>) }
{
  Object.entries(student).map((item, index) => {
    const [key, value] = item
    return <span key={index}>{index}.{key}:{value}</span>
  })
}
```

## 计算属性 - `ComputedAttr`
#### Vue
计算属性是基于它们的响应式依赖进行缓存的，只在相关响应式依赖发生改变时它们才会重新求值
> 官方文档有关于 [计算属性 vs 方法](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%BC%93%E5%AD%98-vs-%E6%96%B9%E6%B3%95)、[计算属性 vs watch](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7-vs-%E4%BE%A6%E5%90%AC%E5%B1%9E%E6%80%A7)的对比分析
Vue的 computed 选项将提供函数作为此属性的 getter 函数，也可以直接设置属性的`get`与`set`
```js
computed: {
  name () {
    const { firstName, secondName } = this
    return `${secondName} ${firstName}`
  },
  reversedMsg: {
    get () {
      return this.msg.split('').reverse().join('')
    },
    set (newValue) {
      this.info = newValue
    }
  }
}
```

#### React
React Hook中 useMemo 可以实现类似 Vue 的计算属性的功能，useMemo接收一个用于计算的函数和依赖项数组作为参数传入，返回 memoized 值；在某个依赖项改变时才会重新计算 memoized 值
无依赖数组，则每次渲染时都会进行计算

React Hook中 useCallback接收一个内联回调函数和依赖项数组作为参数传入，返回该回调函数的 memoized 版本；在某个依赖项改变时，该回调函数就会更新

`useCallback(fn, deps) == useMemo(() => fn, deps)`
```jsx
function UseMemo(props) {
  const { num } = props
  const [size, setSize] = useState(0)

  const max = useMemo(() => Math.max(num, size), [num, size])

  return (
    <div>
      <input type="text" value={size} onChange={(e) => setSize(e.target.value)}/> VS { num }
      <div>Max: { max }</div>
    </div>
  )
}

function UseCallback(props) {
  const { num } = props
  const [size, setSize] = useState(0)
  const [max, setMax] = useState(num)

  const maxHandle = useCallback(value => {
    setSize(value)
    setMax(Math.max(num, value))
  }, [num])

  return (
    <div>
      <input type="text" value={size} onChange={(e) => maxHandle(e.target.value)}/> VS { num }
      <div >Max: { max }</div>
    </div>
  )
}
```

## watch vs render - `Watcher`
#### Vue
Vue watch 选项根据响应数据(props、data、computed)的变化来进行异步操作或开销较大的操作
> watch可以结合debounce来限制操作频率，后续可以补充一下 debounce & throttle
监听某个属性时，提供函数将会在属性发生变化的时候执行
除了提供函数的方式，还可以提供对象，里面含 `handler(fn,数据变化时执行)`、`immediate(bol,刷新触发一次handler)`和`deep(深度监听属性值的变化)`

```html
<template>
  <div>
    <input type="text" v-model="text" placeholder="输入后1秒成为历史输入记录"/>
    <h4>历史输入记录:</h4>
    <div v-for="(item, index) in history" :key="index">{{ item }}</div>
    <input type="text" v-model="student.firstName" placeholder="输入英文姓">
    {{ student.name }}
  </div>
</template>
<script>
const _ = require('lodash')
export default {
  name: 'Watcher',
  data () {
    return {
      text: '',
      history: [],
      student: {
        firstName: 'Chan',
        secondName: 'Andy'
      }
    }
  },
  watch: {
    text (newValue) {
      this.debounceAddHistory(newValue)
    },
    student: {
      handler (newValue) {
        console.log('student watcher')
        this.student.name = `${newValue.firstName} ${this.student.secondName}`
      },
      immediate: true,
      deep: true
    }
  },
  created () {
    this.debounceAddHistory = _.debounce(this.addHistory, 1000)
  },
  methods: {
    addHistory (value) {
      if (value) {
        this.history.push(value)
        this.text = ''
      }
    }
  }
}
</script>
```
#### React
static getDerivedStateFromProps(nextProps, prevState)
1. 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用
2. 返回一个对象来更新 state，如果返回 null 则不更新任何内容
3. 使用场景： state 的值在任何时候都取决于 props

componentDidUpdate(prevProps, prevState, snapshot)
1. 更新后被立即渲染，首次渲染不执行
2. 直接调用setState,必须被包裹在一个条件语句里面，否则导致死循环
3. 常用场景：对比更新前后的props后执行副作用(如setState、操作DOM、网络异步请求等)

> 后续可以探研一下 React Hook 对性能优化的处理
```jsx
static getDerivedStateFromProps(nextProps, prevState) {
  if(nextProps.count !== prevState.count) {
    return {
      count: nextProps.count*2
    }
  }
  return null
}

componentDidUpdate(preProps) {
  if(preProps.count !== this.props.count ) {
    this.setState(prevState => {
      return {
        history: [...prevState.history, this.props.count]
      }
    })
  }
}
```

## ref - `Ref`
ref 特性访问子组件实例或者子元素(DOM节点)
适用范围：
1. 管理焦点，文本选择或者媒体播放
2. 触发强制动画
3. 集成第三方DOM库

#### Vue
通过 ref 给子组件赋予一个ID引用
`$root`可访问根实例、`$parent`可访问父级组件实例、`$ref`则访问子组件实例、子元素
```html
<template>
<div>
  <ChildDemo ref="child"/>
  <form ref="form">
    <input type="text" v-model="name" required>
  </form>
</div> 
</template>
<script>
import ChildDemo from './ChildDemo.vue'
export default {
  name: 'ParentDemo',
  components: { ChildDemo },
  data () {
    return {}
  },
  mounted () {
    console.log('----$ref - component----')
    console.log(this.$refs.child)
    console.log('----$ref - DOM----')
    console.log(this.$refs.form)
  }
}
</script>
```

#### React
```jsx
class ClassRef extends React.Component {
  constructor() {
    super()
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.inputRef.current)
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <h4>class refs</h4>
        <input type="text" ref={this.inputRef}/>
      </div>
    )
  }
}
```
```jsx
import React, { useRef, useEffect } from 'react'
function Ref() {
  const classRef = useRef(null)
  useEffect(() => {
    console.log(classRef.current)
  }, [])
  return <div>
    <ClassRef ref={classRef}/>
  </div>
}
```

## 表单(v-model vs value) - `VModelValue`
#### Vue
v-model 在表单元素上创建双向数据绑定，根据控件类型自动选取正确的方法来更新元素
- text、textarea 使用 value 属性和 input 事件
- checkbox、radio 使用 checked 属性和 change 事件
- select 使用 value 属性和 change 事件

v-model 不会在输入法组合文字过程中得到更新，`value`X`input事件`可以得到更新
`<input type="file" />`不能使用 v-model 管理组件数据，可以通过 refs 管理表单组件的数据
```html
<VModelComponent v-model="message"/>
```
```html
<template>
  <div>
    <input type="text" v-model="msg" @input="onInput">
  </div>
</template>
<script>
export default {
  name: 'VModelComponent',
  props: ['value'],
  data () {
    return {
      msg: this.value
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
```

#### React
受控组件将 state 赋值给 value 属性，通过 setState 来更新 state
对于非受控组件，可以使用ref从DOM节点中获取表单数据
> 如果用class组件方式 如何实现
```jsx
export default function VModelValue() {
  const [value, setValue] = useState('abc')

  return <div>
    <InputMsg value={value} inputChange={setValue} />
    <div>value: {value}</div>
  </div>
}
```
```jsx
function InputMsg(props) {
  const { value, inputChange } = props
  const [msg, setMsg] = useState(value)
  const changeValue = (e) => {
    setMsg(e.target.value)
    inputChange(e.target.value)
  }
  return <input type="text" value={msg} onChange={changeValue}/>
}
```

## 插槽(slot vs Render Props + this.props.children) - `SlotContent`

#### Vue
将`<slot>`元素作为承载分发内容的出口，让组件具有内容分发的功能
Vue的插槽可分为 默认插槽、具名插槽和作用域插槽(有选择使用插槽组件内部的数据)
- 如果不使用插槽，组件中的内容是不显示
- 插槽<slot></slot>中的内容将作为缺省内容

#### React
react 中通过 this.props.children 和 Render props 实现类似vue中的插槽功能
在class组件中使用`this.props.children`，在function组件中使用`props.children`
通过多个render prop即可实现类似vue中具名插槽的功能(常用的react-router-dom中的Route的component prop就采用了典型的render prop的用法)
```jsx
class NamedSlot extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { header, main, footer, children } = this.props
    return (<div>
      <header>
        { header || (<div>Header content</div>) }
      </header>
      <main>
        { main || (<div>Main content</div>) }
      </main>
      { children }
      <footer>
        { footer || (<div>Footer content</div>) }
      </footer>

    </div>)
  }
}
```

## 逻辑复用(mixin vs HOC + Render Props) - `LogicReuse`
> 当多个逻辑复用时，就会不断嵌套代码(不期望代码如此嵌套)
> React Hooks能较好地解决逻辑复用的问题，后续补充React Hooks解决逻辑复用的栗子
> https://github.com/umijs/hooks/tree/master/packages/hooks/src

#### Vue
Mixin是一种分发 Vue 组件中可复用功能的非常灵活的方式
- mixin的选项其值为对象的，如data、computed、methods、components和directives将混合成一个对象
- mixin内部与组件内部数据冲突，组件优先
- mixin内部生命周期函数与组件内部生命周期函数将==混合为一个数组==，均执行，先执行mixin的生命周期
```JS
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
```

```HTML
<template>
  <div>
    <div>name: {{ person.name }}</div>
    <div>age: {{ age }} years old</div>
    <button @click="sayHi">say hi</button>
    <button @click="sayHello">say hello</button>
  </div>
</template>
<script>
import mixin from './mixin'
export default {
  name: 'Mixin',
  mixins: [mixin],
  data () {
    return {
      person: {
        name: 'Lucy',
        born: 2000
      }
    }
  },
  computed: {
    age () {
      return (new Date()).getFullYear() - this.person.born
    }
  },
  created () {
    console.log('component created')
  },
  mounted () {
    console.log('component mounted')
  },
  methods: {
    sayHi () {
      console.log(`${this.person.name} said hi not ${this.msg}`)
    }
  }
}
</script>
```

#### React
Render Props是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
复用组件通过`this.props.render(this.state)`将渲染数据暴露给外层组件，让外层组件去控制数据的渲染处理
```jsx
class Mouse extends React.Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return (
      <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
        {/* <p>当前鼠标位置(x: {this.state.x}, y: {this.state.y})</p> */}
        { this.props.render(this.state) }
      </div>
    )
  }
}
```

```jsx
<Mouse render={mouse => {
  // console.log(mouse)
  return (<div>
    x-{mouse.x}, y-{mouse.y}
  </div>)
}}/>
```

HOC(High Order Component)
- 高阶组件就是一个函数，接收第一个参数为组件，它返回一个新的组件
- 高阶组件内部的包装组件和被包装组件之间通过props传递数据
```jsx
import React from 'react'
import Mouse from './Mouse'
// 函数，第一个参数为组件
export default (WrapperComponent) => {
  // 返回一个新组件
  return class extends React.Component {
    {/* 复用逻辑处理 */}
    render() {
      return (
        {/* 复用逻辑已通过Mouse组件处理，结合Render Props将处理后数据传递到当前组件WrapperComponent中去 */}
        <Mouse render={mouse => 
          <WrapperComponent mouse={mouse} />
        }/>
      )
    }
  }
}
```
## diff算法
DOM Diff是指Virtual DOM 同步到 Real DOM的操作，即计算两个DOM Tree之间的差异，增量更新 Real DOM
更新Real DOM的原则：能复用的节点绝不删除重新创建
狭义的DOM Diff算法，一般指的是同级兄弟节点的范围之内(若不同层级之间的节点也进行对比，那相当于全量同步Real DOM，这违背Virtual DOM的设计初衷，实现不了性能的优化)

==Q:== DOM Diff 是如何由【A、B、C、D、E、F、G】转换成【D、A、G、F、K、E】

#### Vue
1. 建立新序列（Virtual DOM）头（NS）尾（NE）、老序列（Real DOM）头（OS）尾（OE）一共4个指针
2. 分别对OS/NS、OE/NS、OE/NE进行对比，操作移动、新增、删除

```
Real DOM(old)   : A B C D E F G
Virtual DOM(new): D A G F K E

OldStart OldEnd NewStart NewEnd
A        G      D        E  
1. D A B C E F G
OldStart OldEnd NewStart NewEnd
A        G      A        E
OldStart OldEnd NewStart NewEnd
B        G      G        E
2. D A G B C E F
OldStart OldEnd NewStart NewEnd
B        F      F        E
3. D A G F B C E
OldStart OldEnd NewStart NewEnd
B        E      K        E
OldStart OldEnd NewStart NewEnd
B        C      K        K
4. D A G F K B C E
5. D A G F K C E
6. D A G F K E
```

#### React
1. 首个节点不执行移动
2. 按照Virtual DOM的顺序，依次与在Real DOM中的顺序进行对比，进行移动
```
Real DOM   : A B C D E F G
Virtual DOM: D A G F K E

遍历Virtual DOM
0. D - A B C D E F G
1. A - B C D A E F G
   G - B C D A E F G
2. F - B C D A E G F
3. K - B C D A E G F K
4. E - B C D A G F K E
遍历Real DOM，Virtual DOM中不存在则删除
5. C D A G F K E
6. D A G F K E
```

#### 对比结论
Vue采用从两端到中间的比对方式，React采用从左到右依次比对的方式
在Real DOM的末尾节【d】与Virtual DOM的首节点【d】相同的时候，Vue高效于React
```
a b c d -> d c b a
> react
0. d - a b c d
1. c - a b d c
2. b - a d c b
3. a - d c b a
> vue
OS OE NS NE
a  d  d  a
- d a b c
- d b c a
OS OE NS NE
a  c  c  b
- d c b a

a b c d -> d a b c
> react
0. d - a b c d
1. a - b c d a
2. b - c d a b
3. c - d a b c
> vue
OS OE NS NE
a  d  d  c
- d a b c
```
## 路由(vue-router cs react-router-dom)
#### Vue
- [Vue Router](https://router.vuejs.org/zh/guide/)

#### React
- [REACT ROUTER](https://react-router.docschina.org/)

## 状态管理(vuex vs mobx)
#### Vue
- [Vuex](https://vuex.vuejs.org/zh/guide/)

#### React
- [Mobx](https://cn.mobx.js.org/)
- [笔记](https://github.com/KayanChan/react-study/blob/master/MOBX.MD)

## 兼容IE10及以上（配合使用antd）
#### vue
`babel-loader` - `7.1.5`
`babel/core` - `6.26.3`

1. `yarn add @babel/polyfill ant-design-vue`
2. 入口文件`main.js`第一行添加`import '@babel/polyfill'`
3. `main.js`全局引入antd样式`import 'ant-design-vue/dist/antd.css'`

#### React
`core-js` - `3.6.5`
`babel-loader` - `8.1.0`
`babel/core` - `7.10.2`
> babel@7.4开始不再使用@babel/polyfill.
> core-js@3的更新，@babel/polyfill无法提供core-js@2向core-js@3过渡，依靠core-js和regenerator-runtime替代@babel/polyfill
> babel-loader 需要8.0.0 以上，@babel/core 需要 7.4.0 及以上
1. `yarn eject`暴露`webpack.config.js`
2. 安装基础依赖包`yarn add babel-loader @babel/core @babel/preset-env -D`
3. @babel/polyfill替代方案`yarn add core-js regenerator-runtime`
4. 入口文件`index.js`开始添加`import "core-js/stable"` `import "regenerator-runtime/runtime"`
5. 缺少babel插件则安装`yarn add @babel/plugin-proposal-decorators @babel/plugin-syntax-dynamic-import @babel/plugin-proposal-class-properties`
6. `package.json`添加babel配置、browserlist配置
  ```
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ],
  "babel": {
    "presets": [
      "react-app",
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "usage",
          "corejs": 3
        }
      ]
    ]
  },
  ```
7. 此时IE报错`SCRTPT1002：语法错误`，删除`node_modules`，重新安装依赖
8. 此时IE报错`SCRTPT5009：“Map”未定义`，在`webpack.config.js`中`entry`，数组两项元素互换位置，入口先加载`paths.appIndexJs`
9. 此时IE报错`SCRIPT5007: 缺少对象 `，安装依赖`yarn add setprototypeof`，index.js添加依赖代码
  ```
  import setprototypeof from 'setprototypeof'
  Object.setPrototypeOf = setprototypeof
  ```
10. 安装antd，`yarn add antd`，入口文件`index.js`引入全局antd樣式`import 'antd/dist/antd.css'`，局部引用antd組件`import { Button } from 'antd'`
11. 使用antd组件，控制台输出很多`warning`，原因是`index.js`使用了`<React.StrictMode></React.StrictMode>`，去掉则控制台不会输出相关报错的`warning`

## React Hook
- [React Hook 笔记](https://github.com/KayanChan/vue-vs-react/blob/master/react-todo/ReactHookNote.md)

## 文章参考
- [关于Vue和React的一些对比及个人思考（上）](https://juejin.im/post/5e153e096fb9a048297390c1)
- [关于Vue和React的一些对比及个人思考（中）](https://juejin.im/post/5e292746e51d451c8771d16e)
- [浅谈 React/Vue/Inferno 在 DOM Diff 算法上的异同](http://www.imooc.com/article/details/id/295545)
- [为什么 React 现在要推行函数式组件，用 class 不好吗？](https://www.zhihu.com/question/343314784)
- [react hooks模拟各个生命周期函数](http://www.fed123.com/javascriptnodejs/5750.html)
- [十个案例学会 React Hooks](https://juejin.im/post/5ce53c636fb9a07eba2c1439)
- [看完这篇，你也能把 React Hooks 玩出花](https://juejin.im/post/5d754dbde51d4561cd2466bf)
- [Babel 7 转码](https://webpack.eleven.net.cn/content/babel/)
- [create-react-app 支持IE（IE11/IE10/IE9）](https://blog.csdn.net/it_rod/article/details/100574389)
- [react proptypes](https://react.docschina.org/docs/typechecking-with-proptypes.html)