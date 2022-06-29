import React from 'react'
import { useContext } from 'react'
import { CartItemsContext } from '../context/CartItemsContext';
import styles from "../styles/SavedForLaterItems.module.scss"
import checkedPrime from "../assets/images/checked_prime.png"
const SavedForLaterItems = () => {
    const { saveForLaterItems, dispatchItemEvent } = useContext(CartItemsContext);
    console.log(saveForLaterItems)
    const moveToCartHandler = (id, image, title, price) => {
        dispatchItemEvent('ADD_ITEM', { id, image, title, price });
        dispatchItemEvent('REMOVE_FROM_SAVED_ITEMS', { id, image, title, price });
    }
    const deleteHandler = (id, image, title, price) => {
        dispatchItemEvent('REMOVE_FROM_SAVED_ITEMS', { id, image, title, price });
    }
    return (
        <div className={styles.savedForLaterItems}>
            <p className={styles.header}>Your items</p>
            <p className={styles.subHeader}>saved for later ({saveForLaterItems && saveForLaterItems.length} {saveForLaterItems.length === 1 ? "item" : "items"})</p>
            <div className={styles.itemList}>
                {
                    saveForLaterItems.map((item) => <div className={styles.item} key={item.id}>
                        <img className={styles.img} src={item.img || item.image} alt="" />
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.price}> <strong>₹{item.price}</strong> </p>
                        <p className={styles.avail}>in stock</p>
                        <img src={checkedPrime} className={styles.prime} alt="" srcset="" />
                        <button onClick={() => moveToCartHandler(item.id, item.image || item.img, item.title, item.price)}>Move to cart</button>
                        <p className={styles.delete} onClick={() => deleteHandler(item.id, item.image || item.img, item.title, item.price)}>delete</p>
                        <p className={styles.delete}>see more like this</p>

                    </div>)
                }

            </div>
        </div>
    )
}

export default SavedForLaterItems