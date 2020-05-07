import React, { Component } from 'react'

class Child2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  shouldComponentUpdate(nextProps) {
    // 默认行为return true 是 state 每次发生变化组件都会重新渲染
    // return true

    // props传递的类型是基本类型则可以通过简单判断比较
    return this.props.son !== nextProps.son
  }
  render() {
    console.log('Child2 Component Rendering...')
    return (
      <div>
        <h4>shouldComponentUpdate优化 - 针对props传递基本类型的数据</h4>
        This is Child2 Component: <span>{ this.props.son }</span>
      </div>
    )
  }
}

export default Child2