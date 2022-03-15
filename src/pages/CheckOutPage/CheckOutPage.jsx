import React from "react";
import Header from "../../components/Header";
import SubTotal from "../../components/SubTotal";
import styles from "./CheckOutPage.module.scss";
const CheckOutPage = () => {
  const imgUrl =
    "https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg";
  return (
    <div className={styles.checkOutPage}>
      <Header />
      <div className={styles.checkOut}>
        <div className={styles.checkOut_Left}>
          <img src={imgUrl} className={styles.checkOut_Ad} alt="" />
          <div>
            <h2 className={styles.CheckOutTitle}>Your Shopping Basket</h2>
          </div>
        </div>
        <div className={styles.checkOut_Right}>
          <SubTotal />
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
