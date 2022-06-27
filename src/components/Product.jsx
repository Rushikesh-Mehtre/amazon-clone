import React from "react";
import { useContext } from "react";
// import { useStateValue } from "../context/StateProvider";
import { CartItemsContext } from "../context/CartItemsContext";
import styles from "../styles/Product.module.scss";
const Product = ({ id, title, price, rating, image }) => {
  // const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  const { dispatchItemEvent } = useContext(CartItemsContext)
  const addToBaketHandler = (id, title, price, rating, image) => {
    console.log("lets add item")
    dispatchItemEvent('ADD_ITEM', { id, title, price, rating, image });

  }
  return (
    <div className={styles.product}>
      <div className={styles.productInfo}>
        <p className={styles.productTitle}>{title}</p>
        <p className={styles.productPrice}>
          <small> &#8377; </small>
          <strong>{price}</strong>
        </p>
        <div className={styles.productRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}

          <p></p>
        </div>
      </div>
      <img src={image} alt="" />
      <button
        onClick={() => addToBaketHandler(id, title, price, rating, image)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
