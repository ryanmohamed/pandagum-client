import React, { useState, useRef, useEffect } from "react";
import styles from "./Chatroom.module.css"

import { Formik, Field, Form } from 'formik'
import useSocketContext from "../../hooks/useSocketContext"

function Chatroom() {

    const { socket } = useSocketContext()
    const [ roomId, setRoomId ] = useState(null)
    const inputRef = useRef(null)
    const messages = []

    useEffect(() => {
        socket && socket.emit('get room id')
        socket && socket.on('room id', (id) => {
            setRoomId(id)
        })
        socket && socket.on('chat-msg', msg => {
            console.log(msg)
            messages.push(msg)
        })
    }, [])

    const sendMsg = (values) => {
        const { msg } = values
        if(roomId && socket) {
            socket.emit('message', {
                roomId: roomId,
                message: msg
            })
        }
        inputRef.current.value = ''
    }

    return (
        <div id={styles["Chatroom"]}>
            <div id={styles["Field"]}>

                {
                    messages.map( (val, key) => {
                        return <p>{val}</p>
                    })
                }

                <Formik
                    initialValues={{ msg: '' }}
                    validationSchema={null}
                    onSubmit={sendMsg}
                >
                    <Form id={styles["Input"]}>

                        <Field innerRef={inputRef} name="msg" as="textarea" placeholder="Send a message" />

                        <button type="submit">Submit</button>

                    </Form>
                </Formik>

            </div>
        </div>
    );
}

export default Chatroom