import React, { useState } from 'react'
import Add from '../assets/addAvatar.png'
import { auth, storage, db } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';

export const Register = () => {

    const [err, setErr] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const avatar = e.target[3].files[0]

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            const storageRef = ref(storage, email);

            const uploadTask = uploadBytesResumable(storageRef, avatar);

            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                setErr(true)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateProfile(res.user, {displayName, photoURL: downloadURL})
                    await setDoc(doc(db, "users", res.user.uid), {
                        uid: res.user.uid,
                        displayName,
                        email,
                        photoURL: downloadURL
                    } )
                });
            }
            )
            
        } catch(e) {
            setErr(true)
        }
        
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
                {err && <p className='error'>something went wrong, try again!</p>}
            </div>
        </div>
    )
}

export default Register 