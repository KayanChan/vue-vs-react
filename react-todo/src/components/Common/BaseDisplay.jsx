import React from 'react'
import InputSearch from './InputSearch/InputSearch.jsx'
const styles = {
  margin: '0 auto',
  width: '500px',
  padding: '20px',
  lineHeight: '30px',
  textAlign: 'left'
}
export default function BaseDisplay() {
  return (
    <div style={styles}>
      <h3>搜索框</h3>
      <InputSearch />
    </div>
  )
}