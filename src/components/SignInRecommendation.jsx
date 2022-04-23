import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/SignInRecommendation.module.scss";
const SignInRecommendation = () => {
  const naviagte = useNavigate();
  const signInHandler = () => {
    naviagte("/signin");
  };
  return (
    <div className={styles.signInRecommendation}>
      <p className={styles.head}>See personalized recommendations</p>
      <button className={styles.btn} onClick={signInHandler}>
        Sign in
      </button>
      <p className={styles.signUp}>
        New customer ? <Link to="/signup">start here</Link>
      </p>
    </div>
  );
};

export default SignInRecommendation;
