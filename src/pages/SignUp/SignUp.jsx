import React from "react";
import styles from "./SignUp.module.scss";
import amazon1 from "../../assets/images/amazon1.png";
import { Link } from "react-router-dom";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AiFillCaretRight } from "react-icons/ai";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.top}>
        <img src={amazon1} alt="amazon logo" />
        <div className={styles.signUpForm}>
          <form action="">
            <p className={styles.head}>Create Account</p>
            <div className={styles.inputBox}>
              <label htmlFor="">Your name</label>
              <input type="text" />
            </div>
            <div className={styles.mobileBox}>
              <label htmlFor="">Mobile number</label>
              <div>
                <select name="" id="">
                  <option value="">IN +91</option>
                  <option value="">+91</option>
                  <option value="">+91</option>
                  <option value="">+91</option>
                </select>
                <input type="number" placeholder="Mobile number" />
              </div>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="">Email (optional)</label>
              <input type="text" />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="">Password</label>
              <input type="password" placeholder="At least 6 characters" />
              <span>
                <HiOutlineInformationCircle className={styles.infoIcon} />{" "}
                Passwords must be at least 6 characters.
              </span>
            </div>
            <div className={styles.text}>
              <p>We will send you a text to verify your phone.</p>
              <p>Message and Data rates may apply.</p>
            </div>
            <button className={styles.btn}>Continue</button>
            {/* <div className={styles.line}></div> */}
            <div className={styles.altOptions}>
              <p>
                Already have an account?{" "}
                <Link to="/signin">
                  Sign in
                  <AiFillCaretRight className={styles.altOptionIcon} />
                </Link>
              </p>
              <p>
                Buying for work?
                <Link to="#">
                  {" "}
                  Create a free business account
                  <AiFillCaretRight className={styles.altOptionIcon} />
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default SignUp;
