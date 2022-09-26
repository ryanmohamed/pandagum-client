import React, { useEffect, useState } from 'react'

import useAxiosPrivate from './useAxiosPrivate'
import useSocket from './useSocket'

import io from 'socket.io-client'

var socket = {}  

const useSocketConnection = ({mutator}) => {
    
    const axiosPrivate = useAxiosPrivate() //private request, including access token
    const [connection, setConnection] = useState(false) 
    const { setSocket } = useSocket() //context for the entire app

    useEffect(() => {
        //we want this boolean and controller to prevent multiple requests
        let isMounted = true
        const controller = new AbortController()

        const handleSocket = async () => {

            //we use our axios instance to privately supply our accessToken
            //we can also see our axiosInterceptors adequately handle whenever our accessToken expires
            await axiosPrivate.get('http://localhost:4000/pool', {
                signal: controller.signal
            })
            .then(res => {
                socket = io('http://localhost:4000/') //setup the socket between client and server
                setSocket(socket) //set context
                
                socket.on('connect', () => {
                    isMounted && setConnection(socket.connected)
                    const username = res.data?.username
                    socket.emit('name', username)
                })

                socket.on('userlist', (list) => {
                    mutator(list)
                })

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

        handleSocket()

        return () => {
            isMounted = false
            controller.abort()
            if(socket) {
                socket.disconnect()
                setConnection(socket.connected)
            }
        }

    }, [])

    return socket
}

export default useSocketConnection;