import React, { useEffect, useState } from 'react';
import './App.css';

import Navbar from './comp/Navbar/Navbar'

import useAuth from './hooks/useAuth';

import { getSocket } from './context/Socket';
import useSocketContext from './hooks/useSocketContext'
import { Navigate } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom'


function App() {

  const { auth } = useAuth()
  const { setSocket } = useSocketContext()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    const socket = getSocket(auth)
    console.log(socket)
    setSocket(socket)
  }, [auth])

  return (
    <div className="App">

      <Navbar />

      <main className='Container'>
        <button onClick={(e) => {
          e.preventDefault()
          navigate('/room', { replace: true })
        }}> Enter Room </button>
      </main>

    </div>
  );


}

export default App;
