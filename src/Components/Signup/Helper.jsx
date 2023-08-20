import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebaseFunctions'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
const Helper = () => {
  const navigate = useNavigate()

  const submitSignup = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    createUserWithEmailAndPassword(auth, data.get('email'), data.get('password'))
      .then((userCredential) => {
        const user = userCredential.user
        updateProfile(user, {
          displayName: data.get('name'),
        })
          .then(() => {
            setDoc(doc(db, 'users', auth.currentUser.uid), {
              id: auth.currentUser.uid,
              name: data.get('name'),
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
  return { submitSignup }
}

export default Helper
