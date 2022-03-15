import React from "react";
// import { Link } from "react-router-dom";
import styles from "../styles/MainSix.module.scss";
function MainSix() {
  const imgUrl =
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg";
  return (
    <div className={styles.mainSix}>
      <h3>Pay your credit card bills on Amazon</h3>
      <img src={imgUrl} alt="" />
      {/* <Link to="#">Pay now</Link> */}
    </div>
  );
}

export default MainSix;
