import React from 'react'
import ClassComponent from './ClassComponent'
import StyleComponent from './StyleComponent'
class ClassStyle extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent />
        <StyleComponent />
      </div>
    )
  }
}

export default ClassStyle