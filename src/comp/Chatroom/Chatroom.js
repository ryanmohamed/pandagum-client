import React, { useState, useRef, useEffect } from "react";
import styles from "./Chatroom.module.css"

import { Formik, Field, Form } from 'formik'
import useSocketContext from "../../hooks/useSocketContext"
import ScrollToBottom, { useScrollToBottom } from 'react-scroll-to-bottom';


function Chatroom() {

    const { socket } = useSocketContext()
    const [ roomId, setRoomId ] = useState(null)
    const [ messages, setMessages ] = useState([])
    const inputRef = useRef(null)
    const bottomRef = useRef(null)

    const addMessage = (msg, type) => {
        const tmp = [...messages]
        tmp.push({ message: msg, type: type})
        setMessages(tmp)
    }

    useEffect(() => {
        socket && socket.emit('get room id')
        socket && socket.on('room id', (id) => {
            setRoomId(id)
        })
    }, [])

    useEffect(() => {
        socket && socket.on('chat-msg', msg => {
            addMessage(msg, 'recieved')
        })
    }, [socket, messages])

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [messages])

    const sendMsg = (values) => {
        const { msg } = values
        if(roomId && socket) {

            addMessage(msg, 'sent')

            socket.emit('message', {
                roomId: roomId,
                message: msg
            })

        }
        inputRef.current.value = ''
        values.msg = ''
    }

    return (
        <div id={styles["Chatroom"]}>
            <div id={styles["Field"]}>
                
                <div id={styles["Messages"]}>
                {
                    messages.map( (val, key) => (
                        <div 
                            className={styles.Msg}
                            id={styles[val?.type]}
                            key={key}
                        >
                            {val?.message}
                        </div>
                    ))
                }
                <div ref={bottomRef} />
                </div>

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