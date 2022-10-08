import React, { useEffect, useState } from 'react';
import './App.css';

import Navbar from './comp/Navbar/Navbar'

import useAuth from './hooks/useAuth';

import { getSocket } from './context/Socket';
import useSocketContext from './hooks/useSocketContext'
import { useNavigate } from 'react-router-dom'

import Toggle from './comp/Toggle/Toggle';
import RoomForm from './comp/RoomForms/RoomForm';

import useRoom from './hooks/useRoom';

function App() {

  const { auth } = useAuth()
  const { setSocket } = useSocketContext()
  const { setRoom } = useRoom()
  const navigate = useNavigate()

  useEffect(() => {
    let s = getSocket(auth)
    s.on('msg', msg => {
      console.log(msg)
    })

    s.on('room update', room => {
      setRoom(room)
      console.log(room)
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
