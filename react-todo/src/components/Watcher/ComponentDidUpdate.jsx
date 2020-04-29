import React from 'react'

class ComponentDidUpdate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: []
    }
  }

  componentDidUpdate(preProps) {
    // 响应 props 中的更改,执行副作用
    if(preProps.count !== this.props.count ) {
      // setState必须包裹在一个条件语句里
      this.setState(prevState => {
        return {
          history: [...prevState.history, this.props.count]
        }
      })
    }
  }

  render() {
    return <div>
      <h4>props历史记录</h4>
      {
        this.state.history.map((item, index) => <div key={index}>{item}</div>)
      }
    </div>
  }
}

export default ComponentDidUpdate