import React, { useState } from 'react'

function SelfData1() {
    const [name] = useState('Yoga')
    const [age] = useState(10)
    let [count, setCount] = useState(0)

    return (
        <div>
            <h4>函数组件自身数据</h4>
            <div>
                { name }: { age }
                <button onClick={() => setCount(prevCount  => prevCount+1)}>+1</button>
                <span>count: { count }</span>
            </div>
        </div>
    )
}

export default SelfData1