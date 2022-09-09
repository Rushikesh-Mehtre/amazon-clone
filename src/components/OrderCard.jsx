import React from "react";
import styles from "../styles/OrderCard.module.scss";
import primeCheckedLogo from "../assets/images/checked_prime.png";
const OrderCard = ({ imgUrl, title, currentPrice, originalPrice }) => {
  return (
    <div className={styles.orderCard}>
      <img src={imgUrl} alt="" className={styles.img} />
      <p className={styles.title}>{title.substr(0, 80)}</p>
      <p className={styles.price}>
        <span className={styles.rupeeSign}>₹</span> {currentPrice}{" "}
        <span>
          <span className={styles.mrp}>MRP</span>{" "}
          <span className={styles.originalPrice}>₹{originalPrice}</span>{" "}
        </span>
      </p>
      <p className={styles.freeDelivery}>
        {" "}
        <img
          src={primeCheckedLogo}
          alt=""
          className={styles.primeCheckedLogo}
        />{" "}
        FREE Delivery
      </p>
      <p className={styles.deliveryDate}>Monday, September 12</p>
      <button className={styles.addToCartBtn}>Add to cart</button>
    </div>
  );
};

export default OrderCard;
