import styles from "./LoginForms.module.css"

import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import useAuth from "../../hooks/useAuth";

import { useNavigate } from 'react-router-dom'

function LoginForm() {

  const { setAuth } = useAuth()
  const [errMsg, setErrMsg] = useState('')

  const navigate = useNavigate()

  const onSubmit = async (values) => {

    await axios.post('https://petmatcher-server-auth-v1.herokuapp.com/auth/login', values, {
      headers: { 'Content-Type': 'application/json'
      },
      withCredentials: true
    })
      .then(res => {

        const accessToken = res?.data?.accessToken
        const email = res?.data?.user?.email
        const username = res?.data?.user?.username

        console.log(email, username)
        setAuth({ email, username, accessToken })
        setErrMsg('')
        navigate('/app', { replace: true })

      })
      .catch(err => {

        const status = err?.response?.status
        if(status === 404) setErrMsg('User not found! ❌')
        else if(status === 403) setErrMsg('Incorrect password! 🤔')
        else{
          setErrMsg('Login failed! Not too sure...')
          console.log(status, err?.response);
        } 

      })

  }

  return (
    <div className="LoginForm">

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().required("Required"),
          password: Yup.string().required("Required")
        })}
        onSubmit={onSubmit}
      >

        <Form className={styles.form} id={styles['LoginForm']}>

          <h1 className={styles.Title}> Log in here </h1>

          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage component={"span"} name="email" />

          <Field name="password" type="password" placeholder="Password" autoComplete="on"/>
          <ErrorMessage component={"span"} name="password" />

          { errMsg && <p className={styles.Error}>{errMsg}</p> }

          <button type="submit">Submit</button>

        </Form>


      </Formik>

    </div>
  );


}

export default LoginForm;
