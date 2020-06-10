import React, {useRef } from 'react'
import useFirstMounted from './hooks/useFirstMounted.js'

let isMounted = false
export default function UseRefDemo() {
  const inputElement = useRef(null)
  const onClick = () => {
    inputElement.current.value = 'Hello World'
    console.log(inputElement)
  }
  useFirstMounted() && (isMounted = true)
  return (
    <>
      <h5>example 1</h5>
      <input type="text" ref={inputElement} />
      <button onClick={onClick}>填充文案</button>
      <h5>example 2</h5>
      <div>{ isMounted ? 'OK' : 'NotOK'}</div>
    </>
  )
}