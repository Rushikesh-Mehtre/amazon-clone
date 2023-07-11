import React from "react";
import styles from "../styles/SavedForLaterItems.module.scss";
import checkedPrime from "../assets/images/checked_prime.png";
import { useSelector, useDispatch } from "react-redux";
import { removeProductToSaveForLater } from "../features/SavedForLaterProducts/SavedForLaterProductsSlice";
import { addToCartProduct } from "../features/AddedToCartProducts/AddedToCartProductsSlice";

const SavedForLaterItems = () => {
  const dispatch = useDispatch();
  const savedForLaterProducts = useSelector((state) => state.savedForLaterProducts.savedForLaterProducts);
  console.log("savedForLaterProducts", savedForLaterProducts);
  const moveToCartHandler = (itemToRemoveFromSaveToLater) => {
    dispatch(removeProductToSaveForLater(itemToRemoveFromSaveToLater));
    dispatch(addToCartProduct(itemToRemoveFromSaveToLater));
  };
  const deleteHandler = (itemToDelete) => {
    dispatch(removeProductToSaveForLater(itemToDelete));
  };
  return (
    <div className={styles.savedForLaterItems}>
      <p className={styles.header}>Your items</p>
      <p className={styles.subHeader}>
        saved for later ({savedForLaterProducts && savedForLaterProducts.length}{" "}
        {savedForLaterProducts.length === 1 ? "item" : "items"})
      </p>
      <div className={styles.itemList}>
        {savedForLaterProducts.map((item) => (
          <div className={styles.item} key={item.id}>
            <img className={styles.img} src={item.imgUrl} alt="" />
            <p className={styles.title}>{item.title}</p>
            <p className={styles.price}>
              {" "}
              <strong>₹{item.price}</strong>{" "}
            </p>
            <p className={styles.avail}>in stock</p>
            <img src={checkedPrime} className={styles.prime} alt="" srcset="" />
            <button onClick={() => moveToCartHandler(item)}>Move to cart</button>
            <p className={styles.delete} onClick={() => deleteHandler(item)}>
              delete
            </p>
            <p className={styles.delete}>see more like this</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedForLaterItems;
