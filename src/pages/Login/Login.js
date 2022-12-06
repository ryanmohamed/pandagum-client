import styles from './Login.module.css'
import React from 'react';
import { Link } from 'react-router-dom'
import {useState} from 'react';

import LoginForm from '../../comp/LoginForms/LoginForm';
import SignUpForm from '../../comp/LoginForms/SignUpForm';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


function Login() {

  const [currentState, setcurrentState] = useState('1');
  
  const handleLinkClick = event => {
    console.log(event.currentTarget)
    if (event.currentTarget.textContent === 'Sign In') {
      setcurrentState('1')
    } 
    else if (event.currentTarget.textContent === 'Sign Up') {
      setcurrentState('2')
    }
  };

  return (

    <main className={styles.Login} style={{
        backgroundImage: "url(" + "https://t4.ftcdn.net/jpg/05/37/48/93/360_F_537489302_2bPcBemQrclTXuCmE9C7htBHYBE3Z7q2.jpg" + ")",
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }}>

      <div className='switch-form'>
        <div className='switch-btn'>
          <AwesomeButton type="primary" onPress={handleLinkClick}><Link to='/login' className='btn-learn-more loginClass' ></Link>Sign In</AwesomeButton>
          <AwesomeButton type="primary" onPress={handleLinkClick}><Link to='/login' className='btn-learn-more signinClass' ></Link>Sign Up</AwesomeButton>
        </div>
        <div className='switch-container'>
            {currentState === '1'
            ?  <LoginForm />
            : <SignUpForm />
            }
        </div>
      </div> 
    </main>
  );

}

export default Login;