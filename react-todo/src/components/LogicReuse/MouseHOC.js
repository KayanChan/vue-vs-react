import React from 'react'

export default (WrapperComponent, data) => {
  class MouseComponent extends React.Component {
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

    componentDidMount() {
      console.log(data)
    }
  
    render() {
      const { x, y } = this.state
      return (
        <div style={{height: '20vh'}} onMouseMove={this.handleMouseMove}>
          <h4>HOC</h4>
          <WrapperComponent mouse={{x, y}}/>
        </div>
        // <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
        //   {/* <p>当前鼠标位置(x: {this.state.x}, y: {this.state.y})</p> */}
          
        // </div>
      )
    }
  }

  return MouseComponent
}