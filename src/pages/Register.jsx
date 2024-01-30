import React from 'react'
import Add from '../assets/addAvatar.png'

export const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">OpenChat</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email address' />
                    <input type="password" placeholder='password' />
                    <input type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>you do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register 