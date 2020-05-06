import React from 'react'
import ClassSlot from './ClassSlot'
import FunctionSlot from './FunctionSlot'
import NamedSlot from './NamedSlot'
export default function SlotContent() {
  return (
    <div>
      <ClassSlot>hi SlotContent</ClassSlot>
      <FunctionSlot>hi FunctionSlot</FunctionSlot>
      <NamedSlot
        header={(<div>header header header</div>)}>
        <div>hi NamedSlot</div>
      </NamedSlot>
    </div>
  )
}