import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseFunctions'
import { signOut } from 'firebase/auth'

function ColorSchemesExample() {
  const [user, setUser] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if(auth.currentUser != null){
      setUser(true)
    }
  }, [])
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link style={{ color: '#fff', textDecoration: 'none' }} to='/'>
          Home
        </Link>
      </div>
      <ul className='nav-links'>
        {user ? (
          <>
            <Link to='/'>Home</Link>
            <Link to='/favourites'>Favourite News</Link>
            <Link  onClick={() => {
              signOut(auth).then(() => {
                navigate('/signin')
              }).catch((error) => {
                console.log(error);
              });
            }}>Sign Out</Link>
          </>
        ) : (
          <>
            <Link to='/signin'>Sign in</Link>
            <Link to='/signup'>Sign Up</Link>
          </>
        )}
      </ul>
    </div>
  )
}

export default ColorSchemesExample
