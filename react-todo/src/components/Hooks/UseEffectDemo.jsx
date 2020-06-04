import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function UseEffectDemo () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`useEffect => You clicked ${count} times`)
    return () => {
      console.log(`clear useEffect`)
    }
  }, [count])

  useEffect(() => {
    return () => {
      console.log(`Bye Bye UseEffectDemo`)
    }
  }, [])

  return (
    <>
      <p>You clicked {count} times (output console) <button onClick={() => {setCount(count+1)}}>click me</button></p>
      <Link to="/AntDesign">准备前往AntDesign</Link>
    </>
  )
}