import styles from "./RoomForm.module.css"
import React, { useState, useEffect, useRef } from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom'
import useSocketContext from '../../hooks/useSocketContext'

function CreateRoom({}) {

  const fieldRef = useRef(null)
  const { socket } = useSocketContext()
  const navigate = useNavigate()
  const [ feedback, setFeedback ] = useState(null)


  useEffect(() => {

    const clearForms = () => { fieldRef.current.value = '' }
    socket?.on('left rooms', clearForms)
    socket?.on('create error', (msg) => { setFeedback(msg) })
    socket?.on('create success', (msg) => { setFeedback(msg)} )
    socket?.on('join error', (msg) => { setFeedback(null) })
    socket?.on('join success', (msg) => { setFeedback(null) })
    socket?.on('entered pool', () => { setFeedback(null) })

  }, [socket])

  const onSubmit = async (values) => {

    const roomId = values.RoomId
    const { id } = socket

    setFeedback('')
    values.RoomId = ''
    console.log(`${id} attempting to join room ${roomId}`)
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

          <Field innerRef={fieldRef} name="RoomId" type="text" placeholder="(e.g: 1234)" />
          <ErrorMessage component={"span"} name="RoomId" />

          <button type="submit"> Create and Join Room </button>

          { feedback && <span>{feedback}</span> }


        </Form>

      </Formik>

    </div>
  );


}

export default CreateRoom;
