import React from 'react'
import WithMouseHOC from './WithMouseHOC'

function Mixin(props) {
  return <div>
    <h4>HOC + Render Props</h4>
     x-{props.mouse.x}, y-{props.mouse.y}
  </div>
}

Mixin = WithMouseHOC(Mixin)
export default Mixin