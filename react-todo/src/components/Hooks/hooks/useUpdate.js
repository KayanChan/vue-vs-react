import { useState } from 'react'

export default () => {
  const [, setFlag] = useState()
  const update = () => {
      setFlag(Date.now())
  }

  return update
}