import React, { useState } from 'react'

function InputMsg(props) {
  const { value, inputChange } = props
  const [msg, setMsg] = useState(value)
  const changeValue = (e) => {
    setMsg(e.target.value)
    inputChange(e.target.value)
  }
  return <input type="text" value={msg} onChange={changeValue}/>
}

export default InputMsg