import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <Link to="/Hooks">准备前往React Hook</Link>
    </>
  )
}