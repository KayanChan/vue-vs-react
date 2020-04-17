import React from 'react'
import classNames from 'classnames'

class ClassComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      colorClass: 'App-link'
    }
  }
  render() {
    return (
      <div>
        <div className={this.state.colorClass}>class</div>
        <div className={classNames(this.state.colorClass, 'bold', {'fs16px': true}, ['orange', {box: true}])}>class</div>
      </div>
    )
  }
}

export default ClassComponent