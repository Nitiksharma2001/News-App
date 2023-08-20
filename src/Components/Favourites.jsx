import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebaseFunctions'
import { useNavigate } from 'react-router-dom'
import Card from './Views/Card'
const Favourites = () => {
  const navigate = useNavigate()
  const [favouriteNews, setFavouriteNews] = useState([])
  useEffect(() => {
    if (auth.currentUser === null) {
      console.log(auth.currentUser)
      return navigate('/signin')
    } else {
      const fetchNews = async () => {
        const docRef = doc(db, 'users', auth.currentUser.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setFavouriteNews(docSnap.data().favouriteNews)
          console.log('Document data:', docSnap.data())
        } else {
          console.log('No such document!')
        }
      }
      fetchNews()
    }
  }, [])
  return (
    <div className='favourites' style={{ width: '50vw', margin: '0 auto' }}>
      {favouriteNews.length ? (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {favouriteNews.map((news) => {
            return <Card news={news} />
          })}
        </div>
      ) : (
        'Loading'
      )}
    </div>
  )
}

export default Favourites
