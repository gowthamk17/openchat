import React from 'react'
import Messages from './Messages'
import Input from './Input'

export const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <div className="userName">John Doe</div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
