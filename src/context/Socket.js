import { createContext, useState } from "react"
import io from 'socket.io-client'

import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

export const getSocket = (token) => {

    if(token) {
        return io('http://localhost:4000/', {
            query: token
        })
    }
    return io('http://localhost:4000/')
}

export const SocketContext  = createContext({})

export const SocketProvider = ({ children }) => {

    const [socket, setSocket] = useState({})

    return (
        <SocketContext.Provider value={{ socket, setSocket }}>
            { children }
        </SocketContext.Provider>
    )
}