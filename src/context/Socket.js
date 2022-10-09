import React, { createContext, useState } from "react"
import io from 'socket.io-client'

export const getSocket = (auth) => {

    const token = auth?.accessToken

    if(token) {
        return io.connect('http://localhost:4000/', {
            auth: auth
        })
    }
    
    return io.connect('http://localhost:4000/')
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