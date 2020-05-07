import React, {useEffect} from 'react'

function Child5(props) {

  useEffect(() => {
    console.log('Child5 Component')
  })

  return (
    <div>
      This is Child5 Component: <span>{props.son}</span>
    </div>
  )
}

// export default Child5
// 函数组件在给定相同 props 的情况下渲染相同的结果，通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现
export default React.memo(Child5)