import React, { useEffect, useState } from 'react';
import './App.css';

import Navbar from './comp/Navbar/Navbar'

import useAuth from './hooks/useAuth';

import { getSocket } from './context/Socket';
import useSocketContext from './hooks/useSocketContext'
import { useNavigate } from 'react-router-dom'

import Toggle from './comp/Toggle/Toggle';

function App() {

  const { auth } = useAuth()
  const { socket, setSocket } = useSocketContext()
  const [ joinPool, setJoinPool ] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    let s = getSocket(auth)
    setSocket(s)
  }, [auth])

  useEffect(() => {

    socket?.on('msg', msg => {
      console.log(msg)
    })

    if(joinPool === true) {
      socket.emit('join pool')
    } 

    else if(joinPool === false){
      socket.emit('exit pool')
    }

  }, [joinPool])

  const handleSwitch = (val) => {
    setJoinPool(val)
  }

  return (
    <div className="App">

      <Navbar />

      <main className='Container'>

      <div id="Rooms">

        <p>Want to join a friend or loved one? Join a room.</p>
        
        <div className="RoomForm" id="Create">
          <p>Create a room.</p>
          <input placeholder=''/>
          <button>Create</button>
        </div>

        <div className="RoomForm" id="Join">
          <p>Join a room.</p>
          <input placeholder=''/>
          <button>Join</button>
        </div>

      </div>


      <Toggle returnStatus={handleSwitch}>
        <p>Turn {joinPool ? 'off' : 'on'} random matchmaking?</p>
      </Toggle>


      </main>

    </div>
  );


}

export default App;
