/* eliminates the need for 3 statements in each file */

import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth