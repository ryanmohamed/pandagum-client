import styles from './Navbar.module.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={styles.Navbar}>

        <h1 id={styles['NavHeading']}> Welcome to PandaGum... </h1>

        <div>
        <Link to='#' className={styles.Link}> <h1> About </h1> </Link> { /* wip */ }
        <Link to='#' className={styles.Link}> <h1> Logout </h1> </Link> { /* wip */ }
        <Link to='#' className={styles.ImageLink}>
            <img src='/svgs/cogwheel.svg' alt="cogwheel"></img>
        </Link> 
        </div>
        
    </nav>
  );


}

export default Navbar;