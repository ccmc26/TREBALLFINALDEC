import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.photo} alt="" />
        <p></p>
    </div>
  )
}

export default Item