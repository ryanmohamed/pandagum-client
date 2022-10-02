import styles from "./LoginForms.module.css"

import React, { useState } from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import useAuth from "../../hooks/useAuth";

import { useNavigate, useLocation } from 'react-router-dom'

function SignUpForm() {

  const { setAuth } = useAuth()
  const [ errMsg, setErrMsg ] = useState('')

  const navigate = useNavigate()

  const onSubmit = async (values) => {
    
    await axios.post('http://localhost:4001/auth/signup', values, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    })
    .then( res => {

      const accessToken = res?.data?.accessToken
      const email = res?.data?.user?.email
      const username = res?.data?.user?.username

      setAuth({ email, username, accessToken })
      setErrMsg('')
      navigate('/', { replace: true })

    })
    .catch( err => {
      
      const status = err?.response?.status
      if(status === 403) setErrMsg('Email taken! ❌')
      else if(status === 406) setErrMsg('Incorrect username, email, password format! 🤔')
      else setErrMsg('Sign up failed! Not too sure...')

    })

  }



  return (
    <div className="SignUpForm">

        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={ Yup.object({
                username: Yup.string().min(3, "Must be 3 - 15 characters.").max(15, "Must be 3 - 15 characters.").required("Required"),
                email: Yup.string().email("Invalid email address").required("Required"),
                password: Yup.string().required("Required")
            }) }
            onSubmit={onSubmit}
        >

            <Form className={styles.form} id={styles['SignUpForm']}>

              <h1 className={ styles.Title}> Sign up here </h1>

                <Field name="username" type="text" placeholder="Username" />
                <ErrorMessage component={"span"} name="username"/>

                <Field name="email" type="email" placeholder="Email" />
                <ErrorMessage component={"span"} name="email" />

                <Field name="password" type="password" placeholder="Password" autoComplete="on"/>
                <ErrorMessage component={"span"} name="password" />

                { errMsg && <p className={styles.Error}>{ errMsg }</p>}

                <button type="submit">Submit</button>

            </Form>


        </Formik>
      
    </div>
  );


}

export default SignUpForm;
