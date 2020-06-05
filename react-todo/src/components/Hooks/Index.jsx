import React, { useState } from 'react'
import UseStateDemo from './UseStateDemo.jsx'
import UseEffectDemo from './UseEffectDemo.jsx'
import UseContextDemo from './UseContextDemo.jsx'
import UseReducerDemo from './UserReducerDemo.jsx'
import UseMemoDemo from './UseMemoDemo.jsx'
import useUpdate from './hooks/useUpdate'

export default function Hooks() {
  let [count, setCount] = useState(0)

  useUpdate(() => console.log('update'))

  return (
    <div>
      <h4>useState</h4>
      <UseStateDemo />
      <hr/>
      <h4>useEffect</h4>
      <UseEffectDemo />
      <hr/>
      <h4>UseContext</h4>
      <UseContextDemo />
      <hr/>
      <h4>UseReducer</h4>
      <UseReducerDemo />
      <hr/>
      <h4>UseMemo</h4>
      <UseMemoDemo />
      <h4>React Hooks</h4>
      <div><b>useUpdate - </b>Count: { count } <button onClick={() => setCount(count => count+1)}>点击触发，响应更新</button></div>
    </div>
  )
}