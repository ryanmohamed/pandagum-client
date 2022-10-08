/* eliminates the need for 3 statements in each file */

import { useContext } from 'react'
import { RoomContext } from '../context/RoomProvider'

const useRoom = () => {
    return useContext(RoomContext)
}

export default useRoom