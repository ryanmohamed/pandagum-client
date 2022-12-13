import React, { CSSProperties } from "react";
import styles from "./Spinner.module.css"

import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
    display: "block",
    margin: "0 auto",
    transform: "translate(-50%, 0%)",
    filter: "drop-shadow(10px 10px 4px #f83357)"
};

function Spinner(){
    return (
        <div id={styles.Spinner}>
            <p> Waiting for a match...sorry. </p>
            <PacmanLoader
                color={"#ffe70e"}
                loading={true}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );

    
}

export default Spinner