import React, { useEffect } from 'react';
import useSocketContext from '../../hooks/useSocketContext';

function Room() {

  const { socket } = useSocketContext()

  useEffect(() => {
    console.log(socket?.connected)
  }, [socket])

  return (
    <main className='Room'>

        <p>
            hi
        </p>

        <button onClick={() => {
          console.log(socket.connected)
        }}> click me to check socket connection </button>
      
    </main>
  );


}

export default Room;