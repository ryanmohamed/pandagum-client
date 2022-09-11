import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

function Pool() {

  const axiosPrivate = useAxiosPrivate()
  const [connection, setConnection] = useState(false)

  useEffect(() => {
    //we want this boolean and controller to prevent multiple requests
    let isMounted = true
    const controller = new AbortController()

    const getPool = async () => {

      //we use our axios instance to privately supply our accessToken
      //we can also see our axiosInterceptors adequately handle whenever our accessToken expires
      axiosPrivate.get('http://localhost:4000/pool', {
        signal: controller.signal
      })
      .then(res => {
        console.log(res.data)
        isMounted && setConnection(true)
      })
      .catch(err => {
        console.error(err)
      })

    }

    getPool()

    return () => {
        isMounted = false
        controller.abort()
    }

  }, [])

  return (
    <main className="Pool">

        <h1>Hi</h1>
      
    </main>
  );


}

export default Pool;