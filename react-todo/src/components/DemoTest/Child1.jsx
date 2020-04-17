import React from 'react'
class Child1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      number: 0
    }
    this.setName = this.setName.bind(this)
  }
  componentDidMount() {
    this.setName()
  }
  setName() {
    this.setState({
      name: 'name'
    })
  }
  numberPlus() {
    this.setState((state, props) => {
      return {
        number: state.number + 1
      }
    })
  }
  render() {
    const { age } = this.props
    return <div onClick={() => this.numberPlus()}>{ this.state.name }: { age }</div>
  }
}

export default Child1