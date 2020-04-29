import React, { useState, useCallback } from 'react'

function UseCallback(props) {
  const { num } = props
  const [size, setSize] = useState(0)
  const [max, setMax] = useState(num)

  const maxHandle = useCallback(value => {
    setSize(value)
    setMax(Math.max(num, value))
  }, [num])

  return (
    <div>
      <input type="text" value={size} onChange={(e) => maxHandle(e.target.value)}/> VS { num }
      <div >Max: { max }</div>
    </div>
  )
}

export default UseCallback