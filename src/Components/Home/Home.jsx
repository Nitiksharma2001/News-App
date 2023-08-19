import React, { useState } from 'react'
import Helper from './Helper'
import Collapse from '../Views/Collapse'
import HorizontalCard from '../Views/HorizontalCard'
const Home = () => {
  const [toggle, setToggle] = useState(true)
  const { news, likeDislike } = Helper()
  return (
    <div className='home'>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {news.length ? <>
        {toggle ? 
        <div style={{ display: 'flex', flexDirection:'column'}}>
          {
            news.map((singleNews, index) => {
              return <HorizontalCard news={singleNews} index={index} likeDislike={likeDislike}/>
            })
          }
        </div>
        :
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {
            news.map(singleNews => {
              return <div style={{ width: '300px' }}>
              <Collapse news={singleNews} />
            </div>
            })
          }
          </div>}

      </> : 'Loading'}
    </div>
  )
}

export default Home
