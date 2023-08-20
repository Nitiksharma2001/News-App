import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseFunctions'
import { useNavigate } from 'react-router-dom'
const Helper = () => {
  const [news, setNews] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&country=in`
    if (auth.currentUser == null) {
      navigate('/signin')
    } else {
      fetch(url, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
          setNews(
            data.articles.map((news) => {
              return { ...news, like: false }
            })
          )
        })
    }
  }, [])
  const likeDislike = (index) => {
    const docRef = doc(db, 'users', auth.currentUser.uid)
    updateDoc(docRef, {
      favouriteNews: arrayUnion(news[index]),
    })
  }
  return { news, likeDislike }
}
export default Helper
