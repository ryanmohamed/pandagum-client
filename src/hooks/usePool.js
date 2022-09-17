/* eliminates the need for 3 statements in each file */

import { useContext } from 'react'
import PoolContext from '../context/PoolProvider'

const usePool = () => {
    return useContext(PoolContext)
}

export default usePool