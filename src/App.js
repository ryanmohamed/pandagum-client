import React, { useEffect, useState } from 'react';
import './App.css';

import Navbar from './comp/Navbar/Navbar'

import useAuth from './hooks/useAuth';

import { getSocket } from './context/Socket';
import useSocketContext from './hooks/useSocketContext'
import { Navigate } from 'react-router-dom';

function App() {

  const { auth } = useAuth()
  const { setSocket } = useSocketContext()

  useEffect(() => {
    
    setSocket(getSocket(auth?.accessToken))

  }, [])

  return (
    <div className="App">

      <Navbar />

      <main className='Container'>
        <Navigate to="room"></Navigate>
      </main>

    </div>
  );


}

export default App;
