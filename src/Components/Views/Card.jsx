import Card from 'react-bootstrap/Card'

function KitchenSinkExample({ news }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={news.urlToImage} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.description}</Card.Text>
        <Card.Text>{news.author}</Card.Text>
      </Card.Body>
      {news.delete }
      
      <Card.Body>
        <Card.Link href={news.url}>Go To Detail Official Page</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default KitchenSinkExample
