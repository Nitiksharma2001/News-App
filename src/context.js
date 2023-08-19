import { useState, createContext } from 'react'

export const UserContext = createContext()
export const UserContextFunc = ({ App }) => {
  const [detailNews, setDetailNews] = useState(null)
  return (
    <UserContext.Provider value={{ detailNews, setDetailNews }}>
      <App />
    </UserContext.Provider>
  )
}
