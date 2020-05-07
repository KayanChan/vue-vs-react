import React from 'react'
import WithMouseHOC from './WithMouseHOC'

// function Mixin(props) {
//   return <div>
//     <h4>HOC + Render Props</h4>
//      x-{props.mouse.x}, y-{props.mouse.y}
//   </div>
// }

class Mixin extends React.Component {
  render() {
    const { mouse } = this.props
    return (<div>
      <h4>HOC + Render Props</h4>
      x-{mouse.x}, y-{mouse.y}
    </div>)
  }
}

Mixin = WithMouseHOC(Mixin)
export default Mixin