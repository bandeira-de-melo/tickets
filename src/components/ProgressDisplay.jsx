import React from 'react'

const ProgressDisplay = ({ progress }) => {
  console.log(progress)
  return (
    <div>
      <div className="progress-content">
        <h3>Progresso</h3>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default ProgressDisplay