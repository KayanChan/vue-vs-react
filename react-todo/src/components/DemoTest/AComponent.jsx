import React, { useState } from 'react'

function AComponent(props) {
  const { num, numberChange } = props
  const [ number, setNumber ] = useState(num)

  const numberPlus = () => {
    numberChange(number+1)
    setNumber(number => {
      return number+1
    })
  }
  return <div onClick={numberPlus}>click child's number: {number}</div>
}

export default AComponent