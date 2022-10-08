import { createContext, useState } from "react"

export const RoomContext = createContext({})

export const RoomProvider = ({ children }) => {

    const [room, setRoom] = useState({})
    return (
        <RoomContext.Provider value={{ room, setRoom }}>
            { children }
        </RoomContext.Provider>
    )
}

