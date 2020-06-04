import React, { useState } from 'react'

function UserStateDemo() {
  const [count, setCount] = useState(0)
  const [age] = useState(25)
  const [sex] = useState('女')
  const [job] = useState('老师')

  return (
    <>
      <p>You clicked {count} times <button onClick={() => {setCount(count+1)}}>click me</button></p>
      <div>
        <span>这位{sex}同志，今年{age}岁，是一名{job}</span>
      </div>
    </>
  )
}

export default UserStateDemo