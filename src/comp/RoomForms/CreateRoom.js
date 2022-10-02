import styles from "./RoomForm.module.css"

import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import useAuth from "../../hooks/useAuth";

import { useNavigate, useLocation } from 'react-router-dom'

import useSocketContext from '../../hooks/useSocketContext'

function CreateRoom({}) {

  const { socket } = useSocketContext()
  const navigate = useNavigate()

  const onSubmit = async (values) => {

    const roomId = values.RoomId
    const { id } = socket

    console.log(`${id} entered ${roomId}`)
    console.log('attempting to join room...')
    await socket.emit('create room', { roomId: roomId })

    //navigate('/room', { replace: true })

  }

  return (
    <div className={styles.RoomForm} id={styles['Create']}>

      <Formik
        initialValues={{ RoomId: '' }}
        validationSchema={Yup.object({
          RoomId: Yup.string().matches(/^\d{4}$/)
        })}
        onSubmit={onSubmit}
      >

        <Form className={styles.Form}>

          <h1> Create a Room </h1>
          <p> Enter a 4 digit room ID.</p>

          <Field name="RoomId" type="text" placeholder="(e.g: 1234)" />
          <ErrorMessage component={"span"} name="RoomId" />

          <button type="submit"> Create and Join Room </button>

        </Form>

      </Formik>

    </div>
  );


}

export default CreateRoom;
