import React from 'react'
import styles from "../styles/MobileContent.module.scss";
import { AiFillHeart } from 'react-icons/ai';
const MobileContent = () => {
    return (
        <div className={styles.mobileContent}>
            <div>
                <p>
                    The amazon clone application is available in web version as of now.{" "}
                </p>
                <p> <AiFillHeart className={styles.icon} /> &nbsp; Thanks  |
                    Rushikesh </p>
            </div>

        </div>
    )
}

export default MobileContent