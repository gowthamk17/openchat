import React from 'react'

export const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">OpenChat</span>
                <span className="title">Login</span>
                <form action="">
                    <input type="email" placeholder='email address' />
                    <input type="password" placeholder='password' />
                    <button>Sign In</button>
                </form>
                <p>you don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login 