import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import BComponent from './BComponent'

class DemoTest extends React.Component {
  constructor() {
    super()
    this.state = {
      age: 10,
      name: 'Nacy'
    }
  }
  render() {
    return (
      <div>
        <h4>class组件</h4>
        <Child1 age={ this.state.age }/>
        <h4>函数组件</h4>
        <Child2 name={ this.state.name }/>
        <h4>父子通信</h4>
        <BComponent />
      </div>
    )
  }
}

export default DemoTest