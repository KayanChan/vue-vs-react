import React from 'react'

class ClassRef extends React.Component {
  constructor() {
    super()
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.inputRef.current)
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <h4>class refs</h4>
        <input type="text" ref={this.inputRef}/>
      </div>
    )
  }
}

export default ClassRef