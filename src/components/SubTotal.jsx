import React, { useEffect } from "react";
import styles from "../styles/SubTotal.module.scss";
import CurrencyFormat from "react-currency-format";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SubTotal = () => {
  const addedToCartProducts = useSelector((state) => state.addedToCartProducts.addedToCartProducts);
  const selectedProductsInCart = useSelector((state) => state.selectedProductsInCart.selectedProductsInCart);
  let subtotal = selectedProductsInCart.reduce((accumulator, object) => {
    return Number(accumulator) + Number(object.price * object.quantity);
  }, 0);
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate();
  const proceedHandler = () => {
    if (selectedProductsInCart.length === 0) {
      setShowSelectItemLabel(true);
    } else {
      navigate("/checkout-details");
    }
  };
  const [showSelectItemLabel, setShowSelectItemLabel] = useState(false);
  useEffect(() => {
    if (showSelectItemLabel) {
      setTimeout(() => {
        setShowSelectItemLabel(false);
      }, 5000);
    }
  }, [showSelectItemLabel]);
  return (
    <div className={styles.subTotal}>
      {selectedProductsInCart.length > 0 ? (
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal({selectedProductsInCart.length} items): <strong>{subtotal}</strong>
              </p>
              <small className={styles.subTotal_Gift}>
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={0}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      ) : (
        <p>No items selected</p>
      )}
      <div className={styles.proceddBtnHandler}>
        {showSelectItemLabel && (
          <p className={styles.selectItemToCheckoutLabel}>Please select at least one item to Checkout</p>
        )}
        <button onClick={proceedHandler}>Proceed to Checkout</button>
      </div>
      <div className={styles.emiBox}>
        <p>
          {" "}
          <span>EMI available</span>{" "}
          <span className={styles.icon} onClick={() => setShowText(!showText)}>
            {showText ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
          </span>{" "}
        </p>
        {showText && (
          <p>
            Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards
            and Amazon pay balance top up). <a href="/#">Learn more</a>{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default SubTotal;
