import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context'
const DetailsView = () => {
  const { detailNews } = useContext(UserContext)
  return <div className='detailviews'>{detailNews && <div>
	{detailNews.title}

	</div>}</div>
}

export default DetailsView
