## React Hook
### useState - 声明状态和变量

> useState([initState])
> 参数：
>
> ​	initState 可选，状态(变量)的初始值
> 返回值：
>
> ​	返回一个包含两个元素的一维数组，[当前状态值，改变状态值的方法函数( 参数是接收修改过的新状态值 )]

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
> ​	function，必选，匿名函数(副作用)
>
> ​	array，可选，可存放单个或多个状态对应的变量，也可以为空数组

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

实际实现类似`componentWillUnmount`效果需要传一个**空数组`[]`**给useEffect的第二个参数（如果直接在上面代码添加第二参数为[]是不能执行解绑副作用函数）

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



