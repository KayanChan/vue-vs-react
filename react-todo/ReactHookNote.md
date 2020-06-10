## React Hook
### useState - 声明状态和变量

> const [state, setState] = useState(initialState)
> 参数：
>
> ​	initialState： 可选，状态(变量)的初始值
> 返回值：
>
> ​	返回一个一维数组[state, setState]，[当前状态值，改变状态值的方法函数]
>
> setState(newState)
>
> 参数：
>
> ​	newState：必选，修改过的新状态值

利用ES6中**数组解构**语法，声明状态`count`，赋初始值`0`，以及提供修改状态值的方法`setCount`
  ```react
  const [count, setCount] = useState(0)

  // 等价于
  let _useState = useState(0)
  let count = _useState[0]
  let setCount = _useState[1]
  ```

通过`{}`包裹状态，进行读取状态值
```react
<p>You clicked {count} times</p>
```

更新状态值，React将会重新渲染，且React自动记忆了组件上一次的状态值

```javascript
<button onClick={()=>{setCount(count+1)}}>click me</button>
```

多个状态声明时，React根据useState出现的顺序来确定状态与其对应的state

```react
  const [age] = useState(25)
  const [sex] = useState('女')
  const [job] = useState('老师')
```

useState定义状态时，不能放在条件判断语句当中，原因就是需要明确的状态渲染顺序来对应state

## useEffect - 替代常用生命周期函数

> useEffect(function, [array])
>
> 参数：
>
> ​	function：必选，匿名函数(副作用)
>
> ​	array：可选，可存放单个或多个状态对应的变量，也可以为空数组

传入一个匿名函数（官方描述的副作用），React**首次渲染**和之后的**每次state更新导致视图渲染**都会调用

相当于`componentDidMonut`和`componentDidUpdate`的效果，但是useEffect是**异步**的，不会阻碍视图更新

```react
useEffect(() => {
   console.log(`useEffect => You clicked ${count} times`)
})
```

**返回一个函数的形式**来进行解绑副作用，期望实现类似`componentWillUnmount`效果，但是在状态更新时，useEffect也会进行解绑副作用 ( 即点击按钮count改变时也会触发 )

```react
useEffect(() => {
    console.log(`useEffect => You clicked ${count} times`)

    return () => {
      console.log(`Bye Bye UseEffectDemo`)
    }
})
```

实际实现类似`componentWillUnmount`效果需要传一个**空数组**`[]`给useEffect的第二个参数（如果直接在上面代码添加第二参数为[]是不能执行解绑副作用函数）

```react
useEffect(() => {
    return () => {
      console.log(`Bye Bye UseEffectDemo`)
    }
}, [])
```

当第二个参数传入一个或多个状态值时，解绑副作用将根据状态值的更新进行执行

```react
useEffect(() => {
    console.log(`useEffect => You clicked ${count} times`)
    return () => {
      console.log(`clear useEffect`)
    }
}, [count])
```

# useContext - 父子组件传值

> createContext - 创建context，返回一个包含Provider和Comsumer的上下文变量
>
> useContext - 接收上下文变量，能跨越组件层级直接传递变量 ( 实现上下文 )，对它所包含的组件树提供全局共享数据
>
> const MyContext = createContext() 
>
> 返回值
>
> ​	一个 context 对象（React.createContext 的返回值）
>
> const value = useContext(MyContext)
>
> 参数：
>
> ​	 MyContext： 必选，context 对象
>
> 返回值：
>
> ​	value：该context对象的当前值

通过`createContext`创建一个关于count状态的上下文变量`CountContext`

```react
import { createContext } from 'react'
const CountContext = createContext()
export {
  CountContext
}
```

在父组件的`CountContext.Provider`**闭合标签**里包裹需要接收上下文变量的子组件`Counter`

```
const [count, setCount] = useState(0)
const [msg] = useState('HELLO')
  
<CountContext.Provider value={{count， msg}}>
  <Counter /> 
</CountContext.Provider>
```

子组件通过`useContext`接收来自父组件的提供的数据

```
cont {count, msg} = useContext(CountContext)
```

# useReducer - 实现类似 Redux 

> JavaScript中的Redux中，Reducer操作是一个函数，提供一个状态参数和一个用来控制状态参数
>
> const [state, dispatch] = useReducer(reducer, initialArg, init)
>
> 参数：
>
> ​	reducer：必选，类似Reducer操作函数
>
> ​	initialArg：可选，初始值
>
> ​	init： 可选，惰性初始化，更新值
>
> 返回值：
>
> ​	state：当前的state
>
> ​	dispatch：与state匹配的dispatch方法

编辑reducer操作函数，设置初始值和重置

```
  const reducer = (state, action) => {
    switch(action) {
      case 'plus':
        return state+1
      case 'reduce':
        return state-1
      case 'reset':
        return init(0)
      default:
        return state
    }
  }
  const init = (initialCount) => {
    return initialCount
  }
  const [count, dispatch] = useReducer(reducer, 0, init)
  return (
    <div>
      <p>count = {count}</p>
      <button onClick={() => dispatch('plus')}> click me +1 </button>
      <button onClick={() => dispatch('reduce')}> click me -1 </button>
      <button onClick={() => dispatch('reset')}>click me 0</button>
    </div>
  )
```
# useCallback - 记忆函数，优化性能
> 函数式组件理解为class组件render函数的语法糖，每次重新渲染的时候，函数式组件内部所有的代码都会重新执行一遍
>
> useCallback把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染的子组件
>
> const memoizedCallback = useCallback( () => { doSomething(a[, b...]) }, [a[, b...]])
>
> 参数：
>
> ​	匿名函数：必选，内联回调函数
>
> ​    [a[, b]]: 必选，依赖数组
>
> 返回值：
>
> ​	memoizedCallback ： 返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新

每次组件渲染，`handleClick`都会是一个新的引用，即传给子组件`Counter`的`onClick`一直在变；

**函数组件在每次渲染的时候如果有传递函数的话都会重新渲染子组件**

```react
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount1(count => count + 1)
  }

  return (
    <>
      <Counter value={count} onClick={handleClick}>Counter</Counter>
    </>
  )
```

通过 useCallback 获得一个记忆后的函数提供给后面组件进行渲染，只要子组件继承了 `PureComponent` 或者使用 `React.memo` 就可以有效避免不必要的 VDOM 渲染

`[]`空数组代表无论什么情况下该函数都不会发生改变

```react
const increaseCounter1 = useCallback(() => {
    setCount1(count1 => count1 + 1)
}, [])
```



# useMemo - 记忆组件，优化性能
> useMemo可以优化每次渲染的耗时工作
>
> 在某个依赖项改变时才会重新计算memoizedValue值
>
> 若不存在依赖项，则每次渲染都会计算得到新的memoizedValue值
>
> 实则以空间换速度，通过内存来提升速度
>
> const memoizedValue = useMemo(() => computeExpensiveValue(a[,b...]), [a[, b...]])
> 参数：
> computeExpensiveValue: 必选，缓存的函数
> [a[, b]]: 必选，依赖数组 
> 返回值：
> memoizedValue: memoize创建一个独立函数记忆任何函数，返回一个memoizedState，用来对比缓存

父组件中含有两个子组件A/B；

父组件关于子组件A的状态`timestamp`更新时，也会触发子组件B更新；

父组件关于子组件B的状态`randomNum`更新时，也会触发子组件A更新；

AB子组件各自的状态更新，却触发了兄弟组件不必要的更新，即是一种**性能耗损，不必要的性能浪费**

```react
const [timestamp, setTimestamp] = useState(+new Date())
const [randomNum, setRandomNum] = useState(Math.floor(Math.random()*10 + 1))

const childA = <ChildA timestamp={timestamp} />
const childB = <ChildB randomNum={randomNum} />

return (
<>
  <button onClick={() => {setTimestamp(+new Date())}}>触发组件A更新</button>
  <button onClick={() => {setRandomNum(Math.floor(Math.random()*10 + 1))}}>触发组件B更新</button>
  <div>{childA}</div>
  <div>{childB}</div>
</>
)
```

useMemo经过函数计算得到一个确定的**记忆值**，只有在第二个参数**依赖项数组**的值发生变化时，才触发**缓存函数**的更新

子组件A/B改变时，childA/childB才会重新渲染

```react
const childA = useMemo(() => <ChildA timestamp={timestamp} />, [timestamp])
const childB = useMemo(() => <ChildB randomNum={randomNum} />, [randomNum])
```

**useCallback 的功能完全可以由 useMemo 所取代，区别在于useCallback 不会执行第一个参数函数，而是将它返回，而 useMemo 会执行第一个函数并且将函数执行结果返回**

```
useCallback(fn, deps) <=> useMemo(() => fn, deps)
```



# useRef - 获取DOM元素和保存变量
> useRef接收一个参数为ref的初始值，返回一个对象，对象的current字段指向实例/保存变量，实现获得目标节点实例或保存状态的功能
> useRef(initialValue)
>
> 参数：
>
> ​		initialValue： 可选，初始值
>
> 返回值：
>
> ​		一个可变的ref对象，其`.current`属性初始化为initialValue

useRef的两个主要作用：

- 获取React JSX中的DOM元素，从而操作DOM的属性和值（一般不建议，React界面可通过状态去控制）
- 保存变量（更建议采用useContext的方式处理）

获取DOM元素

```react
const inputElement = useRef(null)
<input type="text" ref={inputElement} />
```

操作DOM，React 都会将 ref 对象的 `.current` 属性设置为相应的 DOM 节点

变更 `.current` 属性不会引发组件重新渲染

```react
inputElement.current.value = 'Hello World'
```

保存变量
useRef保存的变量不会随着每次数据的变化重新生成，而是保持在我们最后一次赋值时的状态
可以配合useCallback和useEffect实现`preProps/preState`的功能
**手动更改`Ref.current`的值并不会引起关联状态的变动，即不会引起视图的变化**（ref在内存空间中开辟了一个堆空间将初始值存储起来，该值与初始化的值存储在不同的内存空间，视图显示的一直会是初始值）
```react
const isFirst = React.useRef(true)

if (isFirst.current) {
  isFirst.current = false

  return true
}

return isFirst.current
```