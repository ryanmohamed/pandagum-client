import React, { useEffect, useState } from 'react';
import useSocketContext from '../../hooks/useSocketContext';
import useAuth from '../../hooks/useAuth'

function Room() {

  const { socket } = useSocketContext()
  const [ roomId, setRoomId ] = useState(null)
  const [ name, setName ] = useState(null)
  const [ ready, setReady ] = useState(false)
  const { auth } = useAuth()

  useEffect(() => {
    
    socket.emit('get room id')

    auth && setName(auth?.username)

    socket && console.log(socket)

    socket?.on('room id', (id) => {
      setRoomId(id)
    })
    socket?.on('ready', () => {
      console.log('hi')
      //setReady(true)
    })

  }, [])


  return (
    <main className='Room'>

      {
        name && <p style={{color: 'white', fontSize: '32px',}}>Welcome {name}!</p>
      }

      { roomId && <p style={{color: 'white', fontSize: '32px',}}>
          You are in room {roomId}
      </p>
      }

      {
        !ready ? <p style={{color: 'white', fontSize: '32px',}}>Give us a moment while someone connects...</p> : <span style={{color: 'white', fontSize: '32px',}}>Paired with user X!</span>
      } 

    </main>
  );


}

export default Room;