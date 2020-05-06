import React from 'react'
import MouseHOC from './MouseHOC.js'
class DisplayMouse extends React.Component {
  render() {
    return <div> x-{this.props.mouse.x}, y-{this.props.mouse.y}</div>
  }
}

DisplayMouse = MouseHOC(DisplayMouse, 'data from DisplayMouse')

export default DisplayMouse