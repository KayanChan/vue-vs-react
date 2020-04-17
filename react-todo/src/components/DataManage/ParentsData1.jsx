import React, { useState } from 'react'

function ParentsData1(props) {
    const { name, isParents, isChild } = props

    const [parentsName] = useState(name)
    const [_isParents] = useState(isParents)
    const [_isChild] = useState(isChild)

    return (
    <div>
        <h4>函数组件：通过props接收父层数据</h4>
        { parentsName } {_isParents} {_isChild}
    </div>)
}

export default ParentsData1