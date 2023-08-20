import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth,  } from '../../firebaseFunctions'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
  const navigate = useNavigate()
  const submitSignin = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }
  return { submitSignin }
}
