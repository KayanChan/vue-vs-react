import React, { useState } from 'react'

const styles = {
  width: '200px',
  padding: '0px 10px',
  border: '1px solid #e0e0e0'
}

export default function InputSearch() {
  const [inputValue, setInputValue] = useState('')
  const [searchBox, setSearchBox] = useState([])

  const debounce = (fn, delay) => {
    let timer = null;
    return function(event) {
      timer && clearTimeout(timer)
      event.persist && event.persist() // 保留引用，已备异步阶段访问
      timer = setTimeout(() => {
        fn.call(this, event)
      }, delay) 
    }
  }

  const handler =  e => {
    console.log('onChange')
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const onChangeHandler = debounce(handler, 1000)

  const onKeyPressHandler = e => {
    console.log('onKeyPress')
    console.log(e)
    // if(e.nativeEvent.keyCode === 13) {
    //   setSearchBox([...searchBox, e.target.value])
    //   setInputValue('')
    // }
  }

  return (
    <div>
      <input
        type="text"
        style={styles}
        placeholder="输入搜索词"
        value={inputValue}
        onChange={e => onChangeHandler(e)}/>
      <div>
        搜索词列表：
        <ol>
          {searchBox.map((word, key) => <li key={key}>{ word }</li>)}
        </ol>
      </div>
    </div>
  )
}