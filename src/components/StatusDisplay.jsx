import React from 'react'

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color
    switch (status) {
      case 'Concluido':
        color = "#88c457"
        break;
      case 'Em execução':
        color = "#f5d880"
        break;
      case 'Pausado':
        color = "#e12323"
        break;
      default:
        color = "#bcbcbc"
        break;
    }

    return color

  }


  return (
    <div className='status-display' style={{ backgroundColor: getColor(status) }}>
      {status}
    </div>
  )
}

export default StatusDisplay