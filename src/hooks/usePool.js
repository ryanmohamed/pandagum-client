import axios from "axios"
import { useState } from "react"

const usePool = () => {

    const [connection, setConnection] = useState(false)

    const connectToPool = async () => {
        const response = await axios.get('http://localhost:3001/pool/', {
            withCredentials: true /* allows us to send cookies */
        })
        console.log(response.data)
    }

    return connection
}

export default usePool