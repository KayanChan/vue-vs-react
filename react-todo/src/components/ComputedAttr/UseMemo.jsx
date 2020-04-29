import React, { useState, useMemo } from 'react'

function UseMemo(props) {
  const { num } = props
  const [size, setSize] = useState(0)

  const max = useMemo(() => Math.max(num, size), [num, size])

  return (
    <div>
      <input type="text" value={size} onChange={(e) => setSize(e.target.value)}/> VS { num }
      <div>Max: { max }</div>
    </div>
  )
}

export default UseMemo