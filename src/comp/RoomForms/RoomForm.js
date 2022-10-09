import React from "react";
import styles from './RoomForm.module.css'

import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";

function RoomForm(){
    return <>
        <div id={styles['RoomFormContainer']}
             style={{ background: 'url("/img/app-hero.png") center center' }}
        >

            <p>Want to  join a friend or loved one? Join a room.</p>

            <div id={styles['FormContainer']}>
                <CreateRoom />
                <JoinRoom />
            </div>

        </div>
    </>
}

export default RoomForm