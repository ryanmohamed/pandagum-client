/* eliminates the need for 3 statements in each file */

import { useContext } from 'react'
import { SocketContext } from '../context/Socket'

const useSocketContext = () => {
    return useContext(SocketContext)
}

export default useSocketContext