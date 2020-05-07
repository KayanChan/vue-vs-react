import React, { Component } from 'react'

class Child4 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  shouldComponentUpdate(nextProps) {
    // 使用forceUpdate 会跳过这里
    return this.props.son !== nextProps.son
  }
  updateChild () {
    // 强制更新子组件
    this.forceUpdate()
  }
  render() {
    console.log('Child4 Component Rendering...')
    return (
      <div>
        <h4>forceUpdate - 针对引用类型的数据</h4>
        This is Child4 Component: <span>{ this.props.son[0].name }</span>
      </div>
    )
  }
}

export default Child4