import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import useAuth from "../../hooks/useAuth";

function Logout(){

    const { auth } = useAuth()

    const signout = async () => {

        const body = auth

        await axios.delete('http://localhost:4001/auth/logout', auth, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })
    }

    return (
        <Link onClick={ signout } className="nav-link scrollto" to="/" replace="true">Logout</Link>
    );
}

export default Logout