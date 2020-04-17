import React, { useState } from 'react'

function Child2(props) {
  const [age, setAge] = useState(10)
  return <div>{props.name}: {age} <button onClick={() => setAge(age => age+1)}>+1</button></div>
}

export default Child2