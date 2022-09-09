import React from "react";
import styles from "./BuyAgainPage.module.scss";
import { buyAgainItemList } from "../../data/ProductsList";
import OrderCard from "../../components/OrderCard";
import { useParams } from "react-router-dom";

const Search = () => {
  const params = useParams();
  const resultItems = buyAgainItemList.filter((item) =>
    item.keyword.includes(params.keyword)
  );
  return (
    <div className={styles.searchResults}>
      {resultItems.length > 0 ? (
        <p className={styles.searchHead}>
          {" "}
          {resultItems.length} orders matching{" "}
          <strong>"{params.keyword}"</strong>
        </p>
      ) : (
        <p className={styles.searchHead}>No results found</p>
      )}
      <div className={styles.orders}>
        {resultItems.map((item) => (
          <OrderCard
            imgUrl={item.imgUrl}
            title={item.title}
            currentPrice={item.currentPrice}
            originalPrice={item.originalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
