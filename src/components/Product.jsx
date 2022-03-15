import React from "react";
// import { useStateValue } from "../context/StateProvider";
import styles from "../styles/Product.module.scss";
const Product = ({ id, title, price, rating, image }) => {
  // const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  // const addToBaketHandler = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: id,
  //       title: title,
  //       image: image,
  //       price: price,
  //       rating: rating,
  //     },
  //   });
  // };
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
      // onClick={addToBaketHandler}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
