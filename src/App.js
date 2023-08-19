import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Home from './Components/Home'
import DetailsView from './Components/DetailsView'
import Collapse from "./Components/Views/Collapse"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Collapse />} />
        <Route path='/details' element={<DetailsView />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
