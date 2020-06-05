import React, {useContext} from 'react'
import { CountContext } from './Context.js'

const Counter = () => {
  const { count, msg } = useContext(CountContext)
  return <strong>Child Component: count = {count}, msg = {msg}</strong>
}

export default Counter