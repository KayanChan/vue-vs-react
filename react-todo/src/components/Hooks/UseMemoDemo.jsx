import React, { useState, useEffect, useMemo } from 'react'

const Child = ({name, children}) => {
  function changeA(value) {
    console.log(`A is ${value}`)
  }

  // const actionA = changeA(name)
  const actionA = useMemo(() => changeA(name), [name])

  return (
    <>
      <div>{actionA}</div>
      <div>{children}</div>
    </>
  )
}

const ChildA = ({timestamp}) => {
  useEffect(() => {
    console.log(`A更新：${timestamp}`)
  })
  return <>Hi, I am A. -{timestamp}</>
}

const ChildB = ({randomNum}) => {
  useEffect(() => {
    console.log(`B更新：${randomNum}`)
  })
  return <>Hi, I am B. -{randomNum}</>
}

export default function UseMemoDemo() {
  const [a, setA] = useState('a')
  const [b, setB] = useState('b')

  const [timestamp, setTimestamp] = useState(+new Date())
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random()*10+1))

  // const childA = <ChildA timestamp={timestamp} />
  // const childB = <ChildB randomNum={randomNum} />
  const childA = useMemo(() => <ChildA timestamp={timestamp} />, [timestamp])
  const childB = useMemo(() => <ChildB randomNum={randomNum} />, [randomNum])

  return (
    <>
      <h3>example 1</h3>
      <button onClick={() => {setA(+new Date())}}>A</button>
      <button onClick={() => {setB(+new Date())}}>B</button>
      <Child name={a}>{b}</Child>
      <h3>example 2</h3>
      <button onClick={() => {setTimestamp(+new Date())}}>触发组件A更新</button>
      <button onClick={() => {setRandomNum(Math.floor(Math.random()*10+1))}}>触发组件B更新</button>
      <div>{childA}</div>
      <div>{childB}</div>
    </>
  )
}