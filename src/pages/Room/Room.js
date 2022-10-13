import React, { useEffect, useState } from 'react';
import useSocketContext from '../../hooks/useSocketContext';
import useAuth from '../../hooks/useAuth'
import useRoom from '../../hooks/useRoom';
import styles from './Room.module.css';
import RoomPanel from '../../comp/RoomPanel/RoomPanel';

function Room() {
  return (

    <main className={styles.Room}>
    {/* 
      We dont really want a navbar on this page because of edge cases,
      think of blooket theres really no interface to get back to the
      "home page" this is more app than website
    */}

      <RoomPanel /> 

    </main>
  );


}

export default Room;