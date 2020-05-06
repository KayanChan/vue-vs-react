import React from 'react'
import RenderProps from './RenderProps'
import DisplayMouse from './HOC'
import Mixin from './Mixin'

export default function LogicReuse() {
  return (
    <div>
      <RenderProps />
      <DisplayMouse />
      <Mixin />
    </div>
  )
}