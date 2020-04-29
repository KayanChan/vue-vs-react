import React from 'react'

class GetDerivedStateFromProps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.count !== prevState.count) {
      return {
        count: nextProps.count*2
      }
    }
    // 返回 null 则不更新任何内容
    return null
  }

  render() {
    return <div>{ this.state.count }</div>
  }
}

export default GetDerivedStateFromProps