import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MainFive.module.scss";
import { useSelector } from "react-redux";

const MainFive = () => {
  const imgUrl = "https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg";
  const isUserLoggedIn = useSelector((state) => state.userLogin.isUserLoggedIn);

  return (
    <div className={styles.mainFive}>
      {!isUserLoggedIn ? (
        <div className={styles.top_Content}>
          <h3>Sign in for your best experience</h3>
          <Link className={styles.signInBtn} to="/signin">
            Sign in securely
          </Link>
        </div>
      ) : (
        <div className={classNames(styles.top_Content, styles.loggedIn)}>
          <p>
            <strong>Shop on the Amazon App</strong>
          </p>
          <p>Fast, convenient and secure | Over 17 crore products in your pocket </p>
          <Link className={styles.signInBtn} to="#">
            Download the Amazon app
          </Link>
        </div>
      )}
      <div className={styles.bottom_Content}>
        <img src={imgUrl} alt="laptop device" />
      </div>
    </div>
  );
};

export default MainFive;
