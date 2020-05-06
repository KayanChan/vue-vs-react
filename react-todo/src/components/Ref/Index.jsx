import React, { useRef, useEffect } from 'react'
import ClassRef from './ClassRef.jsx'
import FunctionRef from './FunctionRef.jsx'
function Ref() {
  const classRef = useRef(null)
  const functionRef = useRef(null)
  useEffect(() => {
    console.log(classRef.current)
  }, [])
  return <div>
    <ClassRef ref={classRef}/>
    {/* 转发ref */}
    <FunctionRef ref={functionRef}/>
  </div>
}

export default Ref