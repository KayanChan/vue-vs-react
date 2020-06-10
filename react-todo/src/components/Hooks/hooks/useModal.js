import React, { useState } from 'react'
import { Modal } from 'antd'

export default ({msg}) => {
  const [visible, changeVisible] = useState(false)

  const toggleModalVisible = () => {
    changeVisible(!visible)
  }

  return [(
    <Modal
      visible={visible}
      onOk={toggleModalVisible}
      onCancel={toggleModalVisible}
    >
      {msg}
  	</Modal>
  ), toggleModalVisible]
}