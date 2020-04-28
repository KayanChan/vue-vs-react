import React from 'react'

class ConditionRender extends React.Component {
  constructor() {
    super()
    this.state = {
      showDiv: true,
      showH6: false,
      showSpan: true
    }
  }

  render() {
    const { showDiv, showH6, showSpan } = this.state
    const toggleShow = (isShow) => {
      if(isShow) return <span>show span</span>
      return <div>hide span</div>
    }
    return <div>
      { showDiv && <div>show div</div> }
      { showH6 ? <h6>show H6</h6> : <div>hide H6</div> }
      { toggleShow(showSpan) }
    </div>
  }
}

export default ConditionRender