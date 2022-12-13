import React, { createContext, useState } from "react"
import io from 'socket.io-client'

export const getSocket = (auth) => {

    const token = auth?.accessToken

    if(token) {
        return io.connect('https://petmatcher-server-socket-v1.herokuapp.com', {
            auth: auth,
            withCredentials: true
        })
    }
    
    return io.connect('https://petmatcher-server-socket-v1.herokuapp.com')
}

export const SocketContext  = createContext({})

export const SocketProvider = ({ children }) => {

    const [socket, setSocket] = useState(null)

    return (
        <SocketContext.Provider value={{ socket, setSocket }}>
            { children }
        </SocketContext.Provider>
    )
}