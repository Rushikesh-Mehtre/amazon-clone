import React from "react";
import styles from "./SignInPage.module.scss";
import amazon1 from "../../assets/images/amazon1.png";
import { AiFillCaretDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const signUpHandler = () => {
    navigate("/signup");
  };
  return (
    <div className={styles.signInPage}>
      <div className={styles.top}>
        <img src={amazon1} alt="" />
        <div className={styles.loginForm}>
          <p className={styles.head}>Sign In</p>
          <form action="">
            <div className={styles.inputBox}>
              <label htmlFor="">Email or mobile number</label>
              <input type="text" />
            </div>
            <div className={styles.inputBox}>
              <p>
                <label htmlFor="">Password</label>
                <Link to="#">Forgot password ? </Link>
              </p>
              <input type="password" />
            </div>
            <button type="submit" className={styles.signIn}>
              Sign in
            </button>
            <div className={styles.checkBox}>
              <input type="checkbox" />
              <label htmlFor="">Keep me signed in.</label>
              <Link to="#">
                Details <AiFillCaretDown className={styles.downIcon} />
              </Link>
            </div>
            <div className={styles.newAccount}>
              <p>New to amazon ? </p>
              <button className={styles.createAccount} onClick={signUpHandler}>
                Create your Amazon account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.links}>
          <Link to="#">Conditions of use</Link>
          <Link to="#">Privacy Notice</Link>
          <Link to="#">Help</Link>
        </p>
        <p className={styles.copyRight}>
          © 1996-2022, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
