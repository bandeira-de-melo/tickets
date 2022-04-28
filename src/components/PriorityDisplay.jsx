import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'

const PriorityDisplay = ({priority}) => {
  const stars = []
  for(let i= 0; i < priority; i++){
    stars.push(<div className='star'><BsFillStarFill /></div>)
  }
  return (
    <div className='priority-container'>
      <h3>PRIORIDADE</h3>
      <div className="star-container">
        {
          stars.map(star => star)
        }
      </div>
    </div>
  )
}

export default PriorityDisplay