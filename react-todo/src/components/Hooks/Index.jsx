import React, { useState } from 'react'
import useUpdate from './hooks/useUpdate'

export default function Hooks() {
  // let setStatus = useState('')[1]
  let [count, setCount] = useState(0)

  // useMounted(() => {
  //   setStatus('mounted')
  // })
  useUpdate(() => console.log('update'))

  return (
    <div>
      <h4>React Hooks</h4>
      <div><b>useUpdate - </b>Count: { count } <button onClick={() => setCount(count => count+1)}>点击触发，响应更新</button></div>
    </div>
  )
}