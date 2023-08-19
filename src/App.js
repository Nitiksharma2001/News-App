import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup/Signup'
import Signin from './Components/Signin/Signin'
import Home from './Components/Home/Home'
import DetailsView from './Components/Details/DetailsView'
import Navbar from './Components/Navbar/Navbar'
import Favourites from './Components/Favourites'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<DetailsView />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
