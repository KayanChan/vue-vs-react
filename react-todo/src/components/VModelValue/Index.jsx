import React, { useState } from 'react'
import InputMsg from './InputMsg'
export default function VModelValue() {
  const [value, setValue] = useState('abc')

  return <div>
    <InputMsg value={value} inputChange={setValue} />
    <div>value: {value}</div>
  </div>
}