import React from "react";
import styles from "../styles/RecentlyViewedItems.module.scss";
import ProductsSlider from "./ProductsSlider";
import { recentlyViewedItemsList } from "../data/ProductsList";
const RecentlyViewedItems = () => {
  return (
    <div className={styles.recentlyViewedItems}>
      <ProductsSlider
        title="Your recently viewed items"
        productsList={recentlyViewedItemsList}
        type="recentlyViewed"
      />
    </div>
  );
};

export default RecentlyViewedItems;
