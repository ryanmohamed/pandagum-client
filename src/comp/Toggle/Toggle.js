import React, { useState, useEffect } from "react";
import styles from './Toggle.module.css'

function Toggle({ returnStatus }){

    return <>
    <label className={styles.Switch}>

    <input onChange={(e) => {
        returnStatus(e.target.checked)
    }} className={styles.Input} type="checkbox" />
    <span className={styles.Slider}></span>
    
    </label>
    </>
}

export default Toggle