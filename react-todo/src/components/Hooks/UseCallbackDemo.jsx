import React, { useState, useCallback } from 'react'

const Counter = ({value, children, onClick}) => {
  return (
    <div onClick={onClick}>
      {children}: {value}
    </div>
  )
}


export default function UseCallbackDemo () {
  const [count1, setCount1] = useState(0)

  // const increaseCounter1 = () => {
  //   setCount1(count1 => count1 + 1)
  // }

  const increaseCounter1 = useCallback(() => {
    setCount1(count1 => count1 + 1)
  }, [])

  return (
    <>
      <Counter value={count1} onClick={increaseCounter1}>Counter</Counter>
    </>
  )
}