import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Layout from './pages/Layout'
import './App.css'
import { ProtectedRoute, Jobs, Home, Login, Profile, Settings, Signup } from './pages/index'

function App() {

  return (
    <Routes>

      <Route path='/' element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/Signup' element={ <Signup /> } />

        {/* Protected routes */ }
        <Route path='/jobs' element={ <ProtectedRoute element={ <Jobs /> } /> } />
        <Route path='/profile' element={ <ProtectedRoute element={ <Profile /> } /> } />
        <Route path='/settings' element={ <ProtectedRoute element={ <Settings /> } /> } />

        {/* End of Protected routes */ }

      </Route>

    </Routes>
  )
}

export default App
