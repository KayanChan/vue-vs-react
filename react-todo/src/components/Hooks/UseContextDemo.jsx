import React, { useState } from 'react'
import { CountContext } from './Context.js'
import Counter from './Counter.jsx'

function UserStateDemo() {
  const [count, setCount] = useState(0)
  const [msg] = useState('HELLO')
  return (
    <>
      <p>You clicked {count} times <button onClick={() => {setCount(count+1)}}>click me</button></p>
      <CountContext.Provider value={{count, msg}}>
        <Counter /> 
      </CountContext.Provider>
    </>
  )
}

export default UserStateDemo