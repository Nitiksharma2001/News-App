import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context'
import Card from 'react-bootstrap/Card'
import { AiOutlineHeart } from 'react-icons/ai'
const Home = () => {
  const navigate = useNavigate()
  const { setDetailNews } = useContext(UserContext)
  const [news, setNews] = useState([])
  useEffect(() => {
    const localNews = JSON.parse(localStorage.getItem('news'))
    if (localNews) {
    }
  })
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&country=in`
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setNews(
          data.articles.map((news) => {
            return { ...news, like: false }
          })
        )
      })
  }, [])
  const likeDislike = (index) => {
    setNews((prev) => {
      return prev.map((news, ind) => {
        if (index === ind) {
          return {
            ...news,
            like: !news.like,
          }
        } else {
          return news
        }
      })
    })
  }
  return (
    <div className='home' style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
      {news.map((singleNews, index) => {
        return (
          <Card key={index} style={{ width: '25rem' }}>
            <Card.Img variant='top' src={singleNews.urlToImage} />
            <Card.Body>
              <Card.Title>
                {singleNews.title}
                {<AiOutlineHeart />}
              </Card.Title>
              <Card.Text>{singleNews.description}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setDetailNews(singleNews)
                  navigate('/details')
                }}
              >
                Card Link
              </Card.Link>
              <Card.Link href='#'>Another Link</Card.Link>
            </Card.Body>
          </Card>
        )
      })}
    </div>

    // <div className='home'>
    //   {news.map((singleNews, index) => {
    //     return (
    //       <div key={index}>
    //         <button
    //           onClick={() => {
    //             setDetailNews(singleNews)
    //             navigate('/details')
    //           }}
    //         >
    //           Detail views
    //         </button>
    //         <button onClick={() => likeDislike(index)}>{singleNews.like === true ? 'Like' : 'Dislike'}</button>
    //         {singleNews.title}
    //         {singleNews.description}
    //         <img style={{ width: '300px' }} src={singleNews.urlToImage} alt='error' />
    //         <Link to={singleNews.url}>Details</Link>
    //       </div>
    //     )
    //   })}
    // </div>
  )
}

export default Home
