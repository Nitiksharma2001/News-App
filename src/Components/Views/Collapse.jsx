import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context'

function Example({ news }) {
  const navigate = useNavigate()
  const { setDetailNews } = useContext(UserContext)
  return (
    <>
      <Button
        onClick={() => {
          setDetailNews(news)
          navigate('/details')
        }}
      >
        {news.title.substring(0, 50)}...........
      </Button>
    </>
  )
}

export default Example
