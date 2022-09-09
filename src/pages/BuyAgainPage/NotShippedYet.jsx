import React from "react";
import styles from "./BuyAgainPage.module.scss";
import { buyAgainItemList } from "../../data/ProductsList";
import OrderCard from "../../components/OrderCard";
const NotShippedYet = () => {
  return (
    <div className={styles.orders}>
      {buyAgainItemList
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .map((item) => (
          <OrderCard
            imgUrl={item.imgUrl}
            title={item.title}
            currentPrice={item.currentPrice}
            originalPrice={item.originalPrice}
          />
        ))}
    </div>
  );
};

export default NotShippedYet;
