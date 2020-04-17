import React from 'react'

const divStyle = {
  WebkitTransition: 'all',
  color: 'orange',
  fontSize: '16px'
}
class StyleComponent extends React.Component {
  render() {
    return (
      <div style={divStyle}>style</div>
    )
  }
}

export default StyleComponent