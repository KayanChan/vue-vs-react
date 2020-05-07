import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log('Child Component Rendering...')
    return (
      <div>
        This is Child Component: <span>{ this.props.son }</span>
      </div>
    )
  }
}

export default Child