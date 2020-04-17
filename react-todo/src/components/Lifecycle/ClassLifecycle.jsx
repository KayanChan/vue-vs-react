import React from 'react'

class ClassLifecycle extends React.Component {
  constructor() {
    super()
    console.log('--constructor--')
    this.state = {
      count: 0
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('--getDerivedStateFromProps--')
    return null;
  }

  componentDidMount() {
    console.log('--componentDidMount--')
  }

  shoudeComponentUpdate() {
    console.log('--shoudeComponentUpdate--')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('--getSnapshotBeforeUpdate--')
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('--componentDidUpdate--')
  }

  componentWillUnmount() {
    console.log('--componentWillUnmount--')
  }

  updateChange() {
    this.setState({
      count: 1
    })
  }

  render() {
    console.log('--render--')
    return (
      <div>生命周期 <button onClick={() => this.updateChange()}>更新</button></div>
    )
  }
}

export default ClassLifecycle