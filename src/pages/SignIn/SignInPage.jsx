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
    <div>
      <div className={styles.signinPage}>
        <img src={amazon1} alt="" className={styles.img} />
        <div className={styles.loginForm}>
          <h1>Sign In</h1>
          <form action="">
            <div className={styles.number}>
              <label htmlFor="">Email or mobile phone number</label>
              <input type="text" />
            </div>
            <div className={styles.password}>
              <div className={styles.label}>
                <label htmlFor="">Password</label>
                <p>forgot password </p>
              </div>
              <input type="text" />
            </div>
            <button className={styles.btn}>Sign in</button>
            <p>
              By continuing, you agree to Amazon's{" "}
              <span className={styles.termsLink}>Conditions of Use</span> and
              <span className={styles.termsLink}>Privacy Notice.</span>
            </p>
            <div>
              <input type="checkbox" />
              <label htmlFor="">
                Keep me signed in{" "}
                <span className={styles.detailLink}>
                  Details <AiFillCaretDown />
                </span>{" "}
              </label>
            </div>
            <div>
              <p>New to Amazon?</p>
              <button onClick={signUpHandler}>
                Create your Amazon account{" "}
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
