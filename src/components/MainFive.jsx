import classNames from "classnames";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoggedInContext } from "../context/LoggedInContext";
import styles from "../styles/MainFive.module.scss";
const MainFive = () => {
  const { isLoggedIn } = useContext(LoggedInContext)
  const imgUrl =
    "https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg";
  return (
    <div className={styles.mainFive}>
      {!isLoggedIn ? <div className={styles.top_Content}>
        <h3>Sign in for your best experience</h3>
        <Link className={styles.signInBtn} to="/signin">
          Sign in securely
        </Link>
      </div> : <div className={classNames(styles.top_Content, styles.loggedIn)}>
        <p><strong>Shop on the Amazon App</strong>
        </p>
        <p>Fast, convenient and secure | Over 17 crore products in your pocket </p>
        <Link className={styles.signInBtn} to="#">
          Download the Amazon app
        </Link>
      </div>}
      <div className={styles.bottom_Content}>
        <img src={imgUrl} alt="laptop device" />
      </div>
    </div>
  );
};

export default MainFive;
