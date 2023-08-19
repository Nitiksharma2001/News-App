import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context'
import Card from "../Views/Card"
const DetailsView = () => {
  const { detailNews } = useContext(UserContext)
  return <div className='detailviews'>{detailNews && <Card news={detailNews}/>}</div>
}

export default DetailsView
