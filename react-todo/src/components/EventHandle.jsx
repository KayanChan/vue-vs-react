import React from 'react'

class EventHandle extends React.Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
    this.eventThree = this.eventThree.bind(this)
  }
  eventOne(target, e) {
    console.log(e)
    this.setState({
      events: [...this.state.events, target]
    })
  }
  eventTwo(e, target) {
    console.log(e)
    this.setState({
      events: [...this.state.events, target]
    })
  }
  eventThree() {
    this.setState({
      events: [...this.state.events, '事件3']
    })
  }
  eventFour = (target) => {
    this.setState({
      events: [...this.state.events, '事件4']
    })
  }
  render() {
    return (
      <div>
        <div onClick={this.eventOne.bind(this, '事件1')}>点击事件1</div>
        <div onClick={(e) => this.eventTwo(e, '事件2')}>点击事件2</div>
        <div onClick={this.eventThree}>点击事件3</div>
        <div onClick={this.eventFour}>点击事件4</div>
        <h4>事件列表：</h4>
        {
          this.state.events.map((item, key) => {
            return (<div key={key}>{ item }</div>)
          })
        }
      </div>
    )
  }
}

export default EventHandle