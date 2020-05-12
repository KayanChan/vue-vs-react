import { useRef, useEffect } from 'react'

export default (fn) => {
  const mounting = useRef(true)
  useEffect(() => {
    if (mounting.current) {
      mounting.current = false
    } else {
      typeof fn === 'function' && fn();
    }
  })
}