import React, {useReducer} from 'react'
export default function UserReducerDemo () {
  const init = (initialCount) => {
    return initialCount
  }
  const reducer = (state, action) => {
    switch(action) {
      case 'plus':
        return state+1
      case 'reduce':
        return state-1
      case 'reset':
        return init(0)
      default:
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, 0, init)
  return (
    <div>
      <p>count = {count}</p>
      <button onClick={() => dispatch('plus')}> click me +1 </button>
      <button onClick={() => dispatch('reduce')}> click me -1 </button>
      <button onClick={() => dispatch('reset')}>click me 0</button>
    </div>
  )
}