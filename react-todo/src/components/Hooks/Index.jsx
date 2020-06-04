import React, { useState } from 'react'
import UseStateDemo from './UseStateDemo.jsx'
import UseEffectDemo from './UseEffectDemo.jsx'
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
      <h4>React Hooks</h4>
      <div><b>useUpdate - </b>Count: { count } <button onClick={() => setCount(count => count+1)}>点击触发，响应更新</button></div>
    </div>
  )
}