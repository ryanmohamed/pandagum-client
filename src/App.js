import React, { useEffect, useState } from 'react';
import './App.css';

import LoginForm from './comp/LoginForms/LoginForm';
import SignUpForm from './comp/LoginForms/SignUpForm';

import usePool from './hooks/usePool';
import useAuth from './hooks/useAuth';
import useRefreshToken from './hooks/useRefreshToken';

import Game from './pages/Game';
import Navbar from './comp/Navbar/Navbar'
import Pool from './comp/Pool/Pool';

function App() {

  return (
    <div className="App">

      <Navbar />
      <Pool />

    </div>
  );


}

export default App;
