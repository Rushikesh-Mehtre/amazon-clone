import React from "react";
import styles from "../styles/SubTotal.module.scss";
import CurrencyFormat from "react-currency-format";
import { CartItemsContext } from "../context/CartItemsContext";
import { useContext } from "react";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SubTotal = () => {
  const { items } = useContext(CartItemsContext)
  let subtotal = items.reduce((accumulator, object) => {
    return Number(accumulator) + Number(object.price);
  }, 0);
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate()
  const proceedHandler = () => {
    navigate("/checkout-details")
  }
  return (
    <div className={styles.subTotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({items.length} items): <strong>{subtotal}</strong>
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

      <button onClick={proceedHandler}>Proceed to Checkout</button>
      <div className={styles.emiBox}>
        <p>  <span>EMI available</span> <span className={styles.icon} onClick={() => setShowText(!showText)}>{showText ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>  </p>
        {showText && <p>Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up). <a href="/#">Learn more</a> </p>}
      </div>
    </div>
  );
};

export default SubTotal;
