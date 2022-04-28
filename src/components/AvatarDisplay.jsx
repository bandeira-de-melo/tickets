import React from 'react'
import BlankAvatar from '../assets/images/blank-avatar.jpg'  

const AvatarDisplay = ({ticket, avatar}) => {
  return (
    <div className='avatar-container'>
      <div className='image-container'>
        <img src={avatar? avatar : BlankAvatar } alt="" />
      </div>
    </div>
  )
}

export default AvatarDisplay