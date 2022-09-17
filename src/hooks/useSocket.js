/* eliminates the need for 3 statements in each file */

import { useContext } from 'react'
import SocketContext from '../context/SocketProvider'

const useSocket = () => {
    return useContext(SocketContext)
}

export default useSocket