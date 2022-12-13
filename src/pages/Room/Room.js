import React, { useEffect, useState } from 'react';
import useSocketContext from '../../hooks/useSocketContext';
import useAuth from '../../hooks/useAuth'
import useRoom from '../../hooks/useRoom';
import styles from './Room.module.css';
import RoomPanel from '../../comp/RoomPanel/RoomPanel';
import MatchPanel from '../../comp/MatchPanel/MatchPanel';
import Chatroom from '../../comp/Chatroom/Chatroom';
import Question from '../../comp/Question/Question';
import Spinner from '../../comp/Spinner/Spinner';

function Room() {

  const { room } = useRoom()
  const { socket } = useSocketContext()

  const [ question, setQuestion ] = useState(undefined)
  const [ ready, setReady ] = useState(false)
  const [ over, setOver ] = useState(false)
  const [ image, setImage ] = useState(null)

  useEffect(() => {
    setQuestion(room?.question)
    setReady(room?.ready)
    setImage(room?.image)
    if(!ready) setOver(false)
  }, [room])

  useEffect(() => {
    socket && socket.on('match over', msg => {
      console.log(msg)
      setOver(true)
    })
  }, [socket])

  return (

    <main className={styles.Room}>
    {/* 
      We dont really want a navbar on this page because of edge cases,
      think of blooket theres really no interface to get back to the
      "home page" this is more app than website
    */}

      <RoomPanel className={styles.RoomPanel}/> 
      {/* { playersReady === false ? render something else } */}
      {
        !over ? <MatchPanel>
                  { question ? <Question type={question.type} question={question.question} choices={question.choices} /> : <Spinner on={ready}/> }
                </MatchPanel> :

                <MatchPanel>
                  {image ? <img src={image} alt="Generating image using entries..."/> : <h1>Generating image using entries...</h1>} {/* replace with generatiing image */}
                  {/* { image && <a href={image} download>Download the image!</a> } cant use bc we only have the image link not the true image src */}
                </MatchPanel>
      }
      <Chatroom />

      {/* <button onClick={() => {console.log(playersReady)}}></button> */}

    </main>
  );


}

export default Room;