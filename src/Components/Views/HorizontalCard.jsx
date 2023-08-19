import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context'

function WithHeaderExample({ news, index, likeDislike }) {
  const navigate = useNavigate()

  const { setDetailNews } = useContext(UserContext)

  return (
    <Card>
      <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Card.Title>
            {news.title} <span style={{cursor:'pointer'}} onClick={() => likeDislike(index)}> {news.like ? < AiFillHeart style={{color:'red'}} /> : <AiOutlineHeart />} </span>
          </Card.Title>
          <Card.Text>{news.description}</Card.Text>
          <Button
            variant='primary'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setDetailNews(news)
              navigate('/details')
            }}
          >
            <Link style={{ color: 'white', textDecoration: 'none' }} to='/details'>
              Details
            </Link>
          </Button>
        </div>
        <div>
          <Card.Img style={{ width: '18rem', marginLeft: '20px' }} variant='bottom' src={news.urlToImage} />
        </div>
      </Card.Body>
    </Card>
  )
}

export default WithHeaderExample
