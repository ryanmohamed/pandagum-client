import React, { useEffect } from 'react';
import './App.css';

import Navbar from './comp/Navbar/Navbar'

import useAuth from './hooks/useAuth';

import { getSocket } from './context/Socket';
import useSocketContext from './hooks/useSocketContext'

import Toggle from './comp/Toggle/Toggle';
import RoomForm from './comp/RoomForms/RoomForm';

import useRoom from './hooks/useRoom';

function App() {

  const { auth } = useAuth()
  const { setSocket } = useSocketContext()
  const { setRoom } = useRoom()

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
  }, [auth, setSocket, setRoom])

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
