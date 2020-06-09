import React, { useState } from 'react'
import UseStateDemo from './UseStateDemo.jsx'
import UseEffectDemo from './UseEffectDemo.jsx'
import UseContextDemo from './UseContextDemo.jsx'
import UseReducerDemo from './UserReducerDemo.jsx'
import UseMemoDemo from './UseMemoDemo.jsx'
import UseRefDemo from './UseRefDemo.jsx'
import UseCallbackDemo from './UseCallbackDemo.jsx'
import useWindowSize from './hooks/useWindowSize'
import useUpdate from './hooks/useUpdate'

export default function Hooks() {
  let [count, setCount] = useState(0)
  const size = useWindowSize()

  useUpdate(() => console.log('update'))

  return (
    <div>
      <h4>useState</h4>
      <UseStateDemo />
      <hr/>
      <h4>useEffect</h4>
      <UseEffectDemo />
      <hr/>
      <h4>UseContext</h4>
      <UseContextDemo />
      <hr/>
      <h4>UseReducer</h4>
      <UseReducerDemo />
      <hr/>
      <h4>UseCallbackDemo</h4>
      <UseCallbackDemo />
      <hr/>
      <h4>UseMemo</h4>
      <UseMemoDemo />
      <hr/>
      <h4>UseRef</h4>
      <UseRefDemo />
      <hr/>
      <h4>自定义hook</h4>
      <div>页面尺寸 {size.width} px X {size.height}px</div>
      <h4>React Hooks</h4>
      <div><b>useUpdate - </b>Count: { count } <button onClick={() => setCount(count => count+1)}>点击触发，响应更新</button></div>
    </div>
  )
}