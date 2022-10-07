import React, { useEffect, useState } from 'react';
import './App.css';

import Navbar from './comp/Navbar/Navbar'

import useAuth from './hooks/useAuth';

import { getSocket } from './context/Socket';
import useSocketContext from './hooks/useSocketContext'
import { useNavigate } from 'react-router-dom'

import Toggle from './comp/Toggle/Toggle';
import RoomForm from './comp/RoomForms/RoomForm';

function App() {

  const { auth } = useAuth()
  const { setSocket } = useSocketContext()
  const navigate = useNavigate()

  useEffect(() => {
    let s = getSocket(auth)
    s.on('msg', msg => {
      console.log(msg)
    })
    setSocket(s)
  }, [auth])

  return (
    <div className="App">

      <Navbar />

      <main className='Container'>
      
        <RoomForm />
        <Toggle />

      </main>

    </div>
  );


}

export default App;
