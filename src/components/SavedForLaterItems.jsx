import React from 'react'
import { useContext } from 'react'
import { CartItemsContext } from '../context/CartItemsContext';
import styles from "../styles/SavedForLaterItems.module.scss"
const SavedForLaterItems = () => {
    const { saveForLaterItems } = useContext(CartItemsContext);
    console.log(saveForLaterItems)
    return (
        <div className={styles.savedForLaterItems}>
            <p className={styles.header}>Your items</p>
            <p className={styles.header}>saved for later ({saveForLaterItems && saveForLaterItems.length})</p>
        </div>
    )
}

export default SavedForLaterItems