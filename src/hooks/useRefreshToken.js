import axios from "axios"
import useAuth from "./useAuth"

const useRefreshToken = () => {

    const { setAuth } = useAuth()

    const refresh = async () => {
        const response = await axios.get('http://localhost:4001/auth/token', {
            withCredentials: true /* allows us to send cookies */
        })
        setAuth(prev => {
            console.log(response?.data?.accessToken)
            return { ...prev, accessToken: response?.data?.accessToken }
        })

        return response?.data?.accessToken
    }

    return refresh
}

export default useRefreshToken