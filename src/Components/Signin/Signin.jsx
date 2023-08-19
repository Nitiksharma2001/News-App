import React, { useState } from 'react'
import { auth } from '../../firebaseFunctions'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import SigninUI from "./SigninUI"

const Signin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }
  return (
    <div className='signup'>
      <div>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={submitSignin}>Signin</button>
    </div>
  )
}

export default Signin
