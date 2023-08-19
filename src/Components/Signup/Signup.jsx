import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebaseFunctions'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import SignupUI from './SignupUI'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
const Signup = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            setDoc(doc(db, 'users', auth.currentUser.uid), {
              id: auth.currentUser.uid,
              name,
              favouriteNews: [],
            }).then(() => navigate('/signin'))
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }
  return (
    <>
      <div className='signup'>
        <div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={submitSignup}>Signup</button>
      </div>
    </>
  )
}

export default Signup
