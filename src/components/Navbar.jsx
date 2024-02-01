import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">OpenChat</span>
      <div className='userTab'>
        <img src="" alt="" />
        <div className="userName">John Doe</div>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar