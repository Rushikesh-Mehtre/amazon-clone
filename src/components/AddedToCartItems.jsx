import React from "react";
import styles from "../styles/AddedToCartItems.module.scss";
import checkedPrime from "../assets/images/checked_prime.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCartProduct, removeFromCartProduct } from "../features/AddedToCartProducts/AddedToCartProductsSlice";
import { addProductToSaveForLater } from "../features/SavedForLaterProducts/SavedForLaterProductsSlice";
import {
  addToSelectedProductsInCart,
  removeAllFromSelectedProductsInCart,
} from "../features/SelectedProductsInCart/SelectedProductsInCartSlice";
const AddedToCartItems = () => {
  const addedToCartProducts = useSelector((state) => state.addedToCartProducts.addedToCartProducts);
  const selectedProductsInCart = useSelector((state) => state.selectedProductsInCart.selectedProductsInCart);
  console.log("selectedProductsInCart", selectedProductsInCart);
  let subtotal = selectedProductsInCart.reduce((accumulator, object) => {
    return Number(accumulator) + Number(object.price * object.quantity);
  }, 0);
  const dispatch = useDispatch();
  const deleteHandler = (productToDelete) => {
    console.log("productToDelete", productToDelete);
    dispatch(removeFromCartProduct(productToDelete));
  };
  const saveForLaterHandler = (productToSaveForLater) => {
    console.log("productToSaveForLater", productToSaveForLater);
    dispatch(addProductToSaveForLater(productToSaveForLater));
    dispatch(removeFromCartProduct(productToSaveForLater));
  };
  const addItemToCart = (e, itemToAdd) => {
    console.log(e.target.value);
    let itemToAddObj = { ...itemToAdd };
    itemToAddObj.quantity = e.target.value > 1 ? e.target.value : 1;
    dispatch(addToCartProduct(itemToAddObj));
    if (selectedProductsInCart && selectedProductsInCart.map((item) => item.id).includes(itemToAdd.id)) {
      dispatch(addToSelectedProductsInCart(itemToAddObj));
    }
  };
  const isProductSelected = (product) => {
    return selectedProductsInCart && selectedProductsInCart.map((item) => item.id).includes(product.id);
  };
  const productCheckBoxHandler = (e, product) => {
    if (e.target.checked) {
      dispatch(addToSelectedProductsInCart(product));
    } else {
      dispatch(removeAllFromSelectedProductsInCart(product));
    }
  };
  return (
    <>
      {addedToCartProducts.length > 0 ? (
        <div className={styles.addedToCartItemsBlock}>
          <p className={styles.head}>Shopping Cart</p>
          {addedToCartProducts.length > 0 && (
            <p className={styles.subHead}>
              {" "}
              <span>Deselect all items</span> <span>price</span>{" "}
            </p>
          )}
          {addedToCartProducts.length > 0
            ? addedToCartProducts.map((item) => (
                <div className={styles.addedToCartItem} key={item.id}>
                  <input
                    type="checkbox"
                    checked={isProductSelected(item)}
                    onChange={(e) => productCheckBoxHandler(e, item)}
                  />
                  <img className={styles.img} src={item.imgUrl} alt="" />
                  <div className={styles.text}>
                    <p className={styles.title}>
                      <span className={styles.titleText}>{item.title}</span>
                      <span className={styles.price}>
                        ₹ <strong>{item.price * item.quantity}</strong>{" "}
                      </span>
                    </p>
                    <p className={styles.avail}>in stock</p>
                    <img src={checkedPrime} className={styles.prime} alt="" srcset="" />

                    <p className={styles.gift}>
                      <input type="checkbox" /> <span>This will be a gift</span> <a href="/#">Learn more</a>
                    </p>
                    <div className={styles.actions}>
                      <select
                        name=""
                        id=""
                        value={item.quantity > 5 ? 5 : item.quantity}
                        onChange={(e) => addItemToCart(e, item)}
                      >
                        Quantity
                        <option value="1" selected>
                          Qty : 1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <span onClick={() => deleteHandler(item)}>delete</span>
                      <span onClick={() => saveForLaterHandler(item)}>save for later</span>
                      <span>see more like this</span>
                    </div>
                  </div>
                </div>
              ))
            : ""}
          {selectedProductsInCart.length > 0 ? (
            <p className={styles.subTotal}>
              Subtotal ({selectedProductsInCart.length} items) : ₹
              <span className={styles.number}>{Number(subtotal).toFixed(2)}</span>{" "}
            </p>
          ) : (
            <p className={styles.noItemsSelectedLabel}>No items selected</p>
          )}
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <p>Your Amazon Cart is empty.</p>
          <p>Check your Saved for later items below or continue shopping.</p>
        </div>
      )}
    </>
  );
};

export default AddedToCartItems;
