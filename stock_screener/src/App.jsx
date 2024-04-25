import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Application from './pages/Application'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Application />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App