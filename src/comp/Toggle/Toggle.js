import React, { useState, useEffect } from "react";
import styles from './Toggle.module.css'

import useSocketContext from "../../hooks/useSocketContext";


function Toggle({ children }){

    const { socket } = useSocketContext()
    const [ toggle, setToggle ] = useState(false)
    
    useEffect(() => {
        if(toggle === true) socket?.emit('join pool')
        else socket?.emit('exit pool')
    }, [toggle])

    useEffect(() => {
        console.log(socket);
        socket?.on('left pool', () => {
            setToggle(false)
        })
        socket?.on('entered pool', () => {
            setToggle(true)
        })
    }, [socket])

    return <>
    
    <div className={styles.Toggle}>
        <label className={styles.Switch}>
            <input onChange={(e) => {
                setToggle(e.target.checked)
            }} className={styles.Input} type="checkbox" checked={toggle} />
            <span className={styles.Slider}></span>
        </label>


        <p>Turn {toggle ? 'off' : 'on'} random matchmaking?</p>


    </div>

    </>
}

export default Toggle