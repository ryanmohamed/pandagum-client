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
    s.on('msg', msg => {
      console.log(msg);
    })
    setSocket(s)
  }, [])

  useEffect(() => {

    if(joinPool === true) {
      console.log(joinPool)
      socket.emit('join pool')
    } 

    else if(joinPool === false){
      console.log(joinPool)
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


        <Toggle returnStatus={handleSwitch}/>

        <button onClick={(e) => {
          e.preventDefault()
          navigate('/room', { replace: true })
        }}> Enter Room </button>

      </main>

    </div>
  );


}

export default App;
