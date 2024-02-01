import React from 'react'
import Attach from '../assets/attach.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'/>
      <div className="send">
        <input type="file" name="" id="file" style={{display: "none"}} />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input