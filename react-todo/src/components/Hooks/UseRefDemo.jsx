import React, { useRef } from 'react'

export default function UseRefDemo() {
  const inputElement = useRef(null)
  const onClick = () => {
    inputElement.current.value = 'Hello World'
    console.log(inputElement)
  }

  return (
    <>
      <h5>example 1</h5>
      <input type="text" ref={inputElement} />
      <button onClick={onClick}>填充文案</button>
    </>
  )
}