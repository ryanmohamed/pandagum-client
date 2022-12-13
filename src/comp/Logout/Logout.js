import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Logout(){

    const { auth, setAuth } = useAuth()
    const navigate = useNavigate()

    const signout = async () => {

        await axios.delete('https://petmatcher-server-auth-v1.herokuapp.com/auth/logout', { 
            data: {email: auth?.email} 
        })
        .then(res => {
            console.log(res)
            setAuth({})
            navigate('/')
        })
        .catch(err => {
            console.log(err);
        })
        
    }

    return (
        <Link onClick={ signout } className="nav-link scrollto" to="/" replace="true">Logout</Link>
    );
}

export default Logout