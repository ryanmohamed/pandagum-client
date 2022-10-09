import React, { useEffect, useState } from 'react';
import useSocketContext from '../../hooks/useSocketContext';
import useAuth from '../../hooks/useAuth'
import useRoom from '../../hooks/useRoom';

import Navbar from '../../comp/Navbar/Navbar'
import styles from './Room.module.css'

function Room() {

  const { socket } = useSocketContext()
  const [ roomId, setRoomId ] = useState(null)
  const [ name, setName ] = useState(null)
  const [ ready, setReady ] = useState(false)
  const { auth } = useAuth()

  const { room } = useRoom()

  useEffect(() => {
    
    socket.emit('get room id')

    auth && setName(auth?.username)

    socket && console.log(socket)

    socket && socket.on('room id', (id) => {
      setRoomId(id)
    })

  }, [auth, socket])

  useEffect(() => {
    setReady(room?.ready)
  }, [ room ])


  return (
    <>
    <Navbar />
    <main className={styles.Room}>

      {
        name && <p style={{color: 'white', fontSize: '32px',}}>Welcome {name}!</p>
      }

      { roomId && <p style={{color: 'white', fontSize: '32px',}}>
          You are in room {roomId}
      </p>
      }

      {
        !ready ? <p style={{color: 'white', fontSize: '32px',}}>Give us a moment while someone connects...</p> : <span style={{color: 'white', fontSize: '32px',}}>Paired with user {
          room?.user1?.username === auth?.username ? room?.user2?.username : room?.user1?.username
        }!</span>
      } 

    </main>
    </>
  );


}

export default Room;