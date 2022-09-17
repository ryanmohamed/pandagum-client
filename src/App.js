import React, { useEffect, useState } from 'react';
import './App.css';

import LoginForm from './comp/LoginForms/LoginForm';
import SignUpForm from './comp/LoginForms/SignUpForm';

import useAuth from './hooks/useAuth';
import useRefreshToken from './hooks/useRefreshToken';

import Game from './pages/Game';
import Navbar from './comp/Navbar/Navbar'
import Socket from './comp/Socket/Socket';

import useSocket from './hooks/useSocket';

function App() {

  const [ pool, setPool ] = useState([])
  const { socket } = useSocket()

  const changePool = (p) => {
    setPool(p)
  }

  return (
    <div className="App">

      <Navbar />
      <main className='Container'>
        <Socket mutator={changePool}/>
        <div className='Socket'>
          <p>
            { (socket && socket.connected) ? "Connected" : "Disconnected"}
          </p>
        </div>
        <div className='GameMode'></div>
        <div className='Players'>
          <h2> Players in Pool </h2>
          <ul>
            {
              pool.length !== 0 &&
                pool.map((player, key) => {
                  return <li key={key} className="Player">{player}</li>
                })
              
            }
          </ul>
        </div>
        <div className="Play">
          <button > Play Now! </button>
        </div>
      </main>

    </div>
  );


}

export default App;
