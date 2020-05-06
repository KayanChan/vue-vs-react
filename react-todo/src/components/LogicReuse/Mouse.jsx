import React from 'react'

class Mouse extends React.Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return (
      <div style={{height: '20vh', background: '#f2f2f2'}} onMouseMove={this.handleMouseMove}>
        {/* <p>当前鼠标位置(x: {this.state.x}, y: {this.state.y})</p> */}
        { this.props.render(this.state) }
      </div>
    )
  }
}

export default Mouse