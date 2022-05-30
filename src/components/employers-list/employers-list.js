import React from 'react'
import './employers-list.css'
import EmployersListItem from '../employers-list-item/employers-list-item'

function EmployersList({data, onDelete}) {

  const elemets = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <EmployersListItem 
        key={id} 
        {...itemProps}
        onDelete={() => onDelete(id)}/>
    )
  })

  return (
    <ul className="app-list list-group">
      {elemets}
    </ul>
  )
}

export default EmployersList