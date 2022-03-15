import React from "react";
import styles from "../styles/SubTotal.module.scss";
import CurrencyFormat from "react-currency-format";
const SubTotal = () => {
  return (
    <div className={styles.subTotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal(0 items): <strong>0</strong>
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

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
