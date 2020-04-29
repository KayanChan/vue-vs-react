import React from 'react'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'
function ComputedAttr() {
  return (
    <div>
      <h4>useMemo</h4>
      <UseMemo num={10}/>
      <h4>useCallback</h4>
      <UseCallback num={10}/>
    </div>
  )
}

export default ComputedAttr