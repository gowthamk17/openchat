import React from 'react'
import Add from '../assets/addAvatar.png'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const avatar = e.target[3].files[0]


        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorCode', errorCode)
            console.log('errorMessage', errorMessage)
        });
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">OpenChat</span>
                <span className="title">Register</span>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email address' />
                    <input type="password" placeholder='password' />
                    <input type="file" id="file" accept="image/*"/>
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