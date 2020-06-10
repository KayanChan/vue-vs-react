import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

const reg = /^\d+$/

function IntegerInput({value, onHandleChange}) {
  const onChange = (e) => {
    const {value} = e.target
    if ((!isNaN(value) && reg.test(value)) || value === '') {
      onHandleChange(value)
    }
  }
  return <Input
            value={value}
            onChange={onChange}
            maxLength={25}
          />
}

IntegerInput.propTypes = {
  /**
   * 正整数输入值
   */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
   * 输入框内容变化时的回调
   */
  onHandleChange: PropTypes.func
}

export default IntegerInput