import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login'
import Room from './pages/Room/Room';

import RequireAuth from './comp/RequireAuth/RequireAuth';
import { SocketProvider } from './context/Socket';
import RequireSocket from './comp/RequireSocket/RequireSocket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AuthProvider> { /* provide context to entire app */ }
    <SocketProvider>
    <BrowserRouter>
      <Routes>

        { /* public routes */}
        <Route path="/login" element={<Login />} />
        
        <Route element={<RequireAuth />}>

          <Route path="/" element={<App />}> 

            

          </Route>

          <Route element={<RequireSocket/>}>
            <Route path="/room" element={<Room />} />
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
    </SocketProvider>
  </AuthProvider> 
 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
