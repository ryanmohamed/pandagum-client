import React from "react";
import styles from "./MatchPanel.module.css"

function MatchPanel(props){
    return (
        <div id={styles.MatchPanel}>
            {props.children && props.children}
        </div>
    );
}

export default MatchPanel