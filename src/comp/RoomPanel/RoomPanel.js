import React, { useState, useEffect } from "react";
import styles from './RoomPanel.module.css'

import useSocketContext from '../../hooks/useSocketContext';
import useAuth from '../../hooks/useAuth'
import useRoom from '../../hooks/useRoom';

function RoomPanel(){

    const { socket } = useSocketContext()
    const [ roomId, setRoomId ] = useState(null)
    const [ name, setName ] = useState(null)
    const [ ready, setReady ] = useState(false)
    const { auth } = useAuth()
  
    const { room } = useRoom()

    useEffect(() => {
    
        socket && socket.emit('get room id')
        socket && socket.on('room id', (id) => {
            setRoomId(id)
        })
    
        auth && setName(auth?.username)

      }, [auth, socket])
    
    useEffect(() => { setReady(room?.ready)}, [ room ])

    return (
        <div id={styles['Information']}>
        {
          name && <p id={styles["Name"]}>Welcome {name}!</p>
        }
  
        { roomId && <p id={styles["Room"]}>
            Room {roomId}
        </p>
        }
  
        {
          !ready ? <p className={styles.Status}>Give us a moment while someone connects...</p> : 
            <p className={styles.Status}>Paired with user {
                room?.user1?.username === auth?.username ? room?.user2?.username : room?.user1?.username
            }!</p>
        } 
      </div> 
    );
}

export default RoomPanel