import React from "react"
import { createContext, useState } from "react"

const PoolContext = createContext({})

export const PoolProvider = ({ children }) => {

    const [pool, setPool] = useState([])

    return (
        <PoolContext.Provider value={{ pool, setPool }}>
            { children }
        </PoolContext.Provider>
    )
}

export default PoolContext