import React from "react";
import styles from "../styles/ProductCard.module.scss";
import primeLogo from "../assets/images/checked_prime.png";
import { AiFillStar } from "react-icons/ai";
import classNames from "classnames";

const ProductCard = ({
  imgUrl,
  title,
  price,
  originalPrice,
  bestSeller,
  category,
  rating,
  reviews,
  limitedTimeDeal,
  offerText,
  type,
}) => {
  const ratingArr = Array.apply(null, Array(rating)).map(function (x, i) {
    return i;
  });

  return (
    <div
      className={classNames(
        styles.productCard,
        type === "laptop" ? styles.laptop : ""
      )}
    >
      <img
        src={imgUrl}
        className={classNames(
          styles.productImg,
          type === "laptop" ? styles.laptop : ""
        )}
        alt=""
      />
      {bestSeller && (
        <p className={styles.bestSellerMark}>
          {" "}
          <span className={styles.bestSeller}>Best seller</span>{" "}
          <span className={styles.category}>in {category}</span>{" "}
        </p>
      )}
      <div className={styles.content}>
        <p className={styles.title}> {title.substr(0, 80)}</p>
        {limitedTimeDeal ? (
          <p className={styles.limitedTimeDeal}>Limited time deal</p>
        ) : null}
        <p className={styles.reviews}>
          {ratingArr.map((item) => (
            <AiFillStar key={item} className={styles.icon} />
          ))}{" "}
          &nbsp; {reviews}{" "}
        </p>
        <p className={styles.price}>
          {" "}
          <span className={styles.rupeeSign}>₹</span>{" "}
          <span className={styles.currentPrice}> {price} </span>
          <span className={styles.originalPrice}> ₹{originalPrice}</span>
          <span className={styles.offPercent}>
            ({(((originalPrice - price) / originalPrice) * 100).toFixed(0)}%
            off){" "}
          </span>{" "}
        </p>
        <p className={styles.offerText}>{offerText}</p>
        <p className={styles.primeDelivery}>
          {" "}
          <img
            src={primeLogo}
            className={styles.checkedPrimeLogo}
            alt=""
          />{" "}
          FREE One-Day{" "}
        </p>
        <p className={styles.deliveryOn}>
          FREE Delivery <strong>Tomorrow 11 AM - 3 PM</strong>{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
