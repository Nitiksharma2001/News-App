import React, { useState } from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit'

export default function App({submitSignin}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <MDBInput className='mb-4' type='email' label='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
      <MDBInput className='mb-4' type='password' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

      <MDBBtn onClick={() => submitSignin(email, password)}>
        Sign in
      </MDBBtn>
    </div>
  )
}
