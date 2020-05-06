import React from 'react'
import Mouse from './Mouse'
class MouseTracker extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Mouse render={mouse => {
          // console.log(mouse)
          return (<div>
            <h4>Render Props</h4>
            x-{mouse.x}, y-{mouse.y}
          </div>)
        }}/>
      </div>
    )
  }
}

export default MouseTracker