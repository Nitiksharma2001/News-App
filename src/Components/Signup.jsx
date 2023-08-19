import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebaseFunctions'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

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
        }).then(() => {
			navigate('/signin')
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
  )
}

export default Signup
