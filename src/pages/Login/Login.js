import styles from './Login.module.css'
import React from 'react';

import LoginForm from '../../comp/LoginForms/LoginForm';
import SignUpForm from '../../comp/LoginForms/SignUpForm';

function Login() {
  return (
    <main className={styles.Login} style={{ backgroundColor: '#020100', }}>

      <img className={styles.Logo} src="/images/panda.png" />

      <h1 className={styles.Title}> Welcome to PandaGum!</h1>

      <LoginForm />
      <div className={styles.Divider}></div>
      <SignUpForm />
      
    </main>
  );


}

export default Login;