import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MainFive.module.scss";
const MainFive = () => {
  const imgUrl =
    "https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg";
  return (
    <div className={styles.mainFive}>
      <div className={styles.top_Content}>
        <h3>Sign in for your best experience</h3>
        <Link className={styles.signInBtn} to="/signin">
          Sign in securely
        </Link>
      </div>
      <div className={styles.bottom_Content}>
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
};

export default MainFive;
