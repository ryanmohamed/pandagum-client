import styles from "./RoomForm.module.css"
import React, { useState, useEffect, useRef } from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom'
import useSocketContext from "../../hooks/useSocketContext";

function JoinRoom({}) {

  const { socket } = useSocketContext()
  const navigate = useNavigate()
  const fieldRef = useRef(null)
  const [ feedback, setFeedback ] = useState(null)

  useEffect(() => {

    //hi
    const clearForms = () => { fieldRef.current.value = '' }
    socket?.on('left rooms', clearForms)
    socket?.on('join error', (msg) => { setFeedback(msg) })
    socket?.on('join success', (msg) => { setFeedback(msg)} )
    socket?.on('create error', (msg) => { setFeedback(null) })
    socket?.on('create success', (msg) => { setFeedback(null) })
    socket?.on('entered pool', () => { setFeedback(null) })

  }, [socket])

  const onSubmit = async (values) => {

    const roomId = values.RoomId
    const { id } = socket

    values.RoomId = ''
    setFeedback('')
    console.log(`${id} attempting to join ${roomId}`)
    await socket.emit('join room', { roomId: roomId })
    
    //navigate('/room', { replace: true })

  }

  return (
    <div className={styles.RoomForm} id={styles['Join']}>

      <Formik
        initialValues={{ RoomId: '' }}
        validationSchema={Yup.object({
          RoomId: Yup.string().matches(/^\d{4}$/)
        })}
        onSubmit={onSubmit}
      >

        <Form className={styles.Form}>

          <h1> Join a Room </h1>
          <p> Enter a 4 digit room ID.</p>

          <Field 
            innerRef={fieldRef} 
            name="RoomId" 
            type="text" 
            placeholder="(e.g: 1234)" 
            />
          <ErrorMessage component={"span"} name="RoomId" />

          <button type="submit"> Join Room </button>

          { feedback && <span>{feedback}</span> }

        </Form>

      </Formik>

    </div>
  );


}

export default JoinRoom;
