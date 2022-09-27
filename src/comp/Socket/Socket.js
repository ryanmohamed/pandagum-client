import styles from './Socket.module.css'
import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import io from 'socket.io-client'

import useSocketContext from '../../hooks/useSocketContext'

function Socket({ mutator }) {

  var socket 
  const axiosPrivate = useAxiosPrivate()
  const [connection, setConnection] = useState(false)

  const { setSocket } = useSocketContext()

  useEffect(() => {
    //we want this boolean and controller to prevent multiple requests
    let isMounted = true
    const controller = new AbortController()

    const getPool = async () => {

      //we use our axios instance to privately supply our accessToken
      //we can also see our axiosInterceptors adequately handle whenever our accessToken expires
      await axiosPrivate.get('http://localhost:4000/pool', {
        signal: controller.signal
      })
      .then(res => {
        socket = io('http://localhost:4000/')
        setSocket(socket)
        
        socket.on('connect', () => {
          isMounted && setConnection(socket.connected)
          const username = res.data?.username
          socket.emit('name', username)
        })

        // socket.on('userlist', (list) => {
        //   mutator(list)
        // })

        socket.on('pairup', (payload) => {
          console.log(payload)
        })
        
        socket.on('disconnect', () => {
          isMounted && setConnection(socket.connected)
        })

      })
      .catch(async err => {
        console.error(err)
        setConnection(socket.connected)
      })

    }

    getPool()

    return () => {
        isMounted = false
        controller.abort()
        if(socket) {
          socket.disconnect()
          setConnection(socket.connected)
        }
    }

  }, [])

  return (
    <></>
  );


}

export default Socket;