import React, {useState, useEffect} from "react";
import styles from "./Question.module.css"
import {Formik, Field, Form} from 'formik'

import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import useSocketContext from '../../hooks/useSocketContext'
import useRoom from '../../hooks/useRoom'
import useAuth from "../../hooks/useAuth";

function Question(props){
    
    const {type, question, choices} = props
    const [locked, setLocked] = useState(false)
    const [answer, setAnswer] = useState(null)
    const { auth } = useAuth()
    const { room } = useRoom()

    const { socket } = useSocketContext()

    useEffect(() => {
        
        // if user1 
        if(auth?.username == room?.user1?.username)
            setLocked(room?.user1?.locked)
        
        else if(auth?.username == room?.user2?.username)
            setLocked(room?.user2?.locked)

    }, [room])

    const options = {
        title: 'Lock-in your answer?',
        message: 'Keep in mind, you won\'t be able to change your answer!',
        buttons: [
          {
            label: 'Confirm',
            onClick: async () => {
                if(!locked){
                    console.log(answer)
                    setLocked(true)
                    await socket && socket.emit('answer question', answer)
                    setAnswer('')
                }
            }
          },
          {
            label: 'Cancel',
            onClick: () => null
          }
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
        keyCodeForClose: [8, 32],
        willUnmount: () => {},
        afterClose: () => {},
        onClickOutside: () => {},
        onKeypress: () => {},
        onKeypressEscape: () => {},
        overlayClassName: "overlay-custom-class-name potato"
    }

    const handleSubmit = async (values) => {
        console.log(values?.answer)
        setAnswer(values.answer)
        values.answer = ''
    }

    useEffect(() => {
        if(answer !== '' && answer){
            confirmAlert(options)
        }
    }, [answer])

    return (
        <div id={styles.Question}>
        <h4>{question}</h4>
        <p>{locked}</p>
        {/* may pass in children for question (ex: img) */}
        { props.children && props.children }

        <Formik
            initialValues={{ answer: '' }}
            validationSchema={null}
            onSubmit={handleSubmit}
        >
        <Form>    

        {/* can only be short or mc, but open to possibilites */}
            {type === 'short' && <Field type="text" id={styles.TextField} name="answer" placeholder="Enter your response here..." disabled={locked} autoComplete="off" />}
            {type === 'mc' && choices.map((choice, key) => {
                return <div className={styles.Choice} key={key}>
                    <Field type="radio" name="answer" value={choice} disabled={locked} />
                    <label htmlFor="answer">{choice}</label>
                </div>
            })}

            <button type="submit" id={styles.Button} disabled={locked}> Submit </button>
        </Form>
        </Formik> 

        </div>
    );
}

export default Question