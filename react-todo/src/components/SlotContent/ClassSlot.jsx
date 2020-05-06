import React from 'react'
class ClassSlot extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (<div>
      <h4>ClassSlot</h4>
      { this.props.children }
    </div>)
  }
}

export default ClassSlot