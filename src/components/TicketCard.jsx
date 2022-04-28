import React from 'react'
import AvatarDisplay from './AvatarDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'
import { Link } from 'react-router-dom'
import DeleteBlock from './DeleteBlock'

const TicketCard = ({ ticket }) => {
  return (
    <div className='ticket-card'>
      <Link to={"/"} className="link-area">
        <div className="ticket-color"></div>
        <h3>{ticket.title}</h3>
        <AvatarDisplay avatar={ticket.avatar} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={ticket.priority} />
        <ProgressDisplay progress={ticket.progress} />
      </Link>
      <DeleteBlock />
    </div>
  )
}

export default TicketCard