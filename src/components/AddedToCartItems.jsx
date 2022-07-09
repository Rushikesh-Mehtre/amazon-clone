import React, { useContext } from 'react'
import styles from "../styles/AddedToCartItems.module.scss"
import { CartItemsContext } from '../context/CartItemsContext'
import checkedPrime from "../assets/images/checked_prime.png"
const AddedToCartItems = ({ addedToCartItems }) => {
    const { items, dispatchItemEvent } = useContext(CartItemsContext)
    items.map((item) => console.log(item.price))
    let subtotal = items.reduce((accumulator, object) => {
        return Number(accumulator) + Number(object.price);
    }, 0);
    const deleteHandler = (id, title) => {
        dispatchItemEvent('REMOVE_ITEM', { id, title });
    }
    const saveForLaterHandler = (id, image, title, price) => {
        dispatchItemEvent('SAVE_FOR_LATER_ITEM', { id, image, title, price });
    }
    return (
        <>
            {items.length > 0 ? <div className={styles.addedToCartItemsBlock}>
                <p className={styles.head}>Shopping Cart
                </p>
                {items.length > 0 && <p className={styles.subHead}> <span>Deselect all items</span> <span>price</span> </p>
                }
                {addedToCartItems.length > 0 ? addedToCartItems.map((item) =>
                    <div className={styles.addedToCartItem} key={item.id}>
                        <input type="checkbox" />
                        <img className={styles.img} src={item.image || item.img} alt="" />
                        <div className={styles.text}>
                            <p className={styles.title}>
                                <span className={styles.titleText}>{item.title}</span>
                                <span className={styles.price}>₹ <strong>{item.price}</strong> </span>
                            </p>
                            <p className={styles.avail}>in stock</p>
                            <img src={checkedPrime} className={styles.prime} alt="" srcset="" />

                            <p className={styles.gift}>
                                <input type="checkbox" /> <span>This will be a gift</span> <a href="/#">Learn more</a>
                            </p>
                            <div className={styles.actions}>
                                <select name="" id="">Quantity
                                    <option value="1" selected>Qty : 1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                </select>
                                <span onClick={() => deleteHandler(item.id, item.title)}>delete</span>
                                <span onClick={() => saveForLaterHandler(item.id, item.image || item.img, item.title, item.price)}>save for later</span>
                                <span>see more like this</span>
                            </div>
                        </div>
                    </div>
                ) : ""}
                {addedToCartItems.length > 0 && <p className={styles.subTotal}>Subtotal ({items.length} items) : ₹<span className={styles.number}>{Number(subtotal).toFixed(2)}</span> </p>}
            </div> : <div className={styles.emptyCart}>
                <p>Your Amazon Cart is empty.</p>
                <p>Check your Saved for later items below or continue shopping.

                </p>

            </div>}
        </>

    )
}

export default AddedToCartItems