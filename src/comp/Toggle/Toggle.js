import React, { useState, useEffect } from "react";
import styles from './Toggle.module.css'

<<<<<<< HEAD
function Toggle({ returnStatus }){

    return <>
    <label className={styles.Switch}>

    <input onChange={(e) => {
        returnStatus(e.target.checked)
    }} className={styles.Input} type="checkbox" />
    <span className={styles.Slider}></span>
    
    </label>
=======
function Toggle({ children, returnStatus }){

    return <>
    
    <div className={styles.Toggle}>
        <label className={styles.Switch}>
            <input onChange={(e) => {
                returnStatus(e.target.checked)
            }} className={styles.Input} type="checkbox" />
            <span className={styles.Slider}></span>
        </label>
        {children}
    </div>

>>>>>>> 01f1324049f6fab3d7e4d3cd44701aa7dc0d00b1
    </>
}

export default Toggle