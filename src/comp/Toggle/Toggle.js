import React, { useState, useEffect } from "react";
import styles from './Toggle.module.css'

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

    </>
}

export default Toggle