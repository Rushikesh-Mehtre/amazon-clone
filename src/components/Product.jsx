import React from "react";
import styles from "../styles/Product.module.scss";
import { useDispatch } from "react-redux";
import { addToCartProduct } from "../features/AddedToCartProducts/AddedToCartProductsSlice";
const Product = (props) => {
  const dispatch = useDispatch();
  const { itemObj } = props;
  const { title, price, rating, imgUrl } = itemObj;
  const addToBaketHandler = (itemObj) => {
    dispatch(addToCartProduct(itemObj));
  };
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
      <img src={imgUrl} alt="product-banner" />
      <button onClick={() => addToBaketHandler(itemObj)}>Add to cart</button>
    </div>
  );
};

export default Product;
