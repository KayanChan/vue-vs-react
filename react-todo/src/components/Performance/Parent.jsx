import React, { Component } from 'react'
import Child from './Child'
import Child2 from './Child2'
import Child3 from './Child3'
import Child4 from './Child4'
import Child5 from './Child5'
class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentInfo: '父组件',
      childInfo: '子组件',
      parentArray: [{
        name: 'abc'
      }]
    }
  }
  changeParentInfo = () => {
    const date = new Date()
    this.setState({
      parentInfo: `父组件更新-${date.getHours()}:${(date.getMinutes())}-${date.getSeconds()}`
    })
  }
  changeParentArray = ()  => {
    let temp = this.state.parentArray
    temp[0].name = 'xyz' + new Date().getTime()
    this.setState({
      parentArray: temp
    })
    this.childRef.updateChild()
  }
  render() {
    console.log('Parent Component Rendering...')
    return (
      <div>
        <p>{ this.state.parentInfo }</p>
        <button onClick={this.changeParentInfo}>改变父组件-基本类型</button>
        <Child son={this.state.childInfo} />
        <Child2 son={this.state.childInfo} />
        <Child3 son={this.state.childInfo} />
        <Child5 son={this.state.childInfo} />
        <button onClick={this.changeParentArray}>改变父组件-引用类型</button>
        <Child4 ref={(child)=>{this.childRef = child}} son={this.state.parentArray} />
      </div>
    )
  }
}

export default Parent