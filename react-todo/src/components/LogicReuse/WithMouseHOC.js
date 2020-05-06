import React from 'react'
import Mouse from './Mouse'
export default (WrapperComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => 
          <WrapperComponent mouse={mouse} />
        }/>
      )
    }
  }
}