import React, { PureComponent } from 'react'

class Child3 extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log('Child3 Component Rendering...')
    return (
      <div>
        <h4>PureComponent优化 - 针对props和state传递基本类型的数据</h4>
        This is Child3 Component: <span>{ this.props.son }</span>
      </div>
    )
  }
}

export default Child3