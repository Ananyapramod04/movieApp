import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Viewmovie from './components/Viewmovie'
import Addmovie from './components/Addmovie'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Viewmovie/>}></Route>
        <Route path='/add' element={<Addmovie />}></Route>
    </Routes>
    </>
  )
}

export default App
