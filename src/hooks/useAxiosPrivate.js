import axios from 'axios'
import { useEffect } from 'react'

import useRefreshToken from './useRefreshToken'
import useAuth from './useAuth'

const axiosPrivate = axios.create({
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})

const useAxiosPrivate = () => {
    const refresh = useRefreshToken()
    const { auth } = useAuth()

    useEffect(() => {

        console.log(auth)

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers['authorization']){
                    config.headers['authorization'] = `Bearer ${auth?.accessToken}`
                }  
                return config
            }, (error) => Promise.reject(error)
        ) 

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response, 
            async (error) => { /* expired token */

                const prevReq = error?.config
                if(error?.response?.status === 403 && !prevReq?.sent){ 
                    prevReq.sent = true
                    const newAccessToken = await refresh()
                    prevReq.headers['authorization'] = `Bearer ${newAccessToken}`
                    return axiosPrivate(prevReq)
                }
                return Promise.reject(error)
            }
        )

        return () => { //remove interceptor
            axiosPrivate.interceptors.request.eject(requestIntercept)
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }

    }, [auth, refresh]);

    return axiosPrivate
    
}

export default useAxiosPrivate