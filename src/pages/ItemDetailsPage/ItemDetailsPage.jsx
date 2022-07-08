import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from "./ItemDetailsPage.module.scss"
const ItemDetailsPage = () => {
    const location = useLocation();
    const item = location.state;
    return (
        <div className={styles.itemDetailsPage}>
            <img src={item.imgUrl} alt="" srcset="" />
            <div className={styles.itemDetials}>
                <p>{item.title}</p>
                <p>{item.reviews} {item.rating}</p>
                <p>{item.price}</p>
            </div>
        </div>
    )
}

export default ItemDetailsPage