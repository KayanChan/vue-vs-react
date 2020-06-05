import React, { useState } from 'react'

const Child = ({name, children}) => {
  function changeA(value) {
    console.log(`A is ${value}`)
  }
  const actionA = changeA(name)

  return (
    <>
      <div>{actionA}</div>
      <div>{children}</div>
    </>
  )
}

export default function UseMemoDemo() {
  const [a, setA] = useState('A')
  const [b, setB] = useState('B')
  return (
    <>
      <button onClick={() => {setA(+new Date())}}>A</button>
      <button onClick={() => {setB(+new Date())}}>B</button>
      <Child name={a}>{b}</Child>
    </>
  )
}