import React, { useState } from 'react'

function ListRender() {
  const [list] = useState([
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
  ])

  const [student] = useState({
    name: 'May',
    age: 5,
    sex: 'female'
  })

  return (
    <div>
      <div>
        {
          list.map((item, index) => <h6 key={index} id={item.id}>{ item.name }</h6>)
        }
      </div>
      <div>
        {
          Object.keys(student).map((key, index) => 
            <span key={index}>{index}.{key}:{student[key]} </span>)
        }
      </div>
      <div>
        {
          Object.entries(student).map((item, index) => {
            const [key, value] = item
            return <span key={index}>{index}.{key}:{value}</span>
          })
        }
      </div>
    </div>
  )
}

export default ListRender