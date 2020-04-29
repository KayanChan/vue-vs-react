import React from 'react'
import GetDerivedStateFromProps from './GetDerivedStateFromProps'
import ComponentDidUpdate from './ComponentDidUpdate'
class Watcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  countPlus() {
    this.setState((preState) => {
      return {
        count: preState.count++
      }
    })
  }

  render() {
    return <div>
      <button onClick={() => this.countPlus()}>{this.state.count}*2</button>
      <button onClick={() => this.setState({count: 5})}>=10</button>
      <GetDerivedStateFromProps count={this.state.count} />
      <ComponentDidUpdate count={this.state.count} />
    </div>
  }
}

export default Watcher