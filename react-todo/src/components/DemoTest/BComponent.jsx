import React, { useState } from 'react'
import AComponent from './AComponent'

function BComponent() {
  const [num, setNum] = useState(0)
  const updateNumberHandler = number => {
    setNum(number)
  }
  return (
    <div>
      parents'num is { num }
      <AComponent num={ num } numberChange={ updateNumberHandler }/>
    </div>
  )
}
export default BComponent