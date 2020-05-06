import React, { forwardRef } from 'react'

export default forwardRef((props, ref) => (
  <div>
    <h4 ref={ref}>FunctionRef</h4>
    <div>{ props.children }</div>
  </div>
))