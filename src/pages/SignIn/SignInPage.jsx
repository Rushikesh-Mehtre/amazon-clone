import React, { useState } from "react";
import styles from "./SignInPage.module.scss";
import amazon1 from "../../assets/images/amazon1.png";
import { AiFillCaretDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import BottomLine from "../../components/BottomLine";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/Userlogin/UserLoginSlice";

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUpHandler = () => {
    navigate("/signup");
  };
  const [signInCredentials, setSignInCredentials] = useState({
    emailOrNum: "user",
    password: "user",
  });

  const signInHandler = (e) => {
    e.preventDefault();
    if (!signInCredentials.emailOrNum || !signInCredentials.password) {
      alert("Please enter email id/number and password");
      return;
    } else {
      dispatch(loginUser({ email: signInCredentials.emailOrNum, password: signInCredentials.password }));
      navigate("/");
    }
  };
  const credentialsChangeHandler = (e) => {
    setSignInCredentials({
      ...signInCredentials,
      [e.target.name]: e.target.value,
    });
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
              <input
                type="text"
                name="emailOrNum"
                value={signInCredentials.emailOrNum}
                onChange={(e) => {
                  credentialsChangeHandler(e);
                }}
              />
            </div>
            <div className={styles.inputBox}>
              <p>
                <label htmlFor="">Password</label>
                <Link to="#">Forgot password ? </Link>
              </p>
              <input
                type="password"
                name="password"
                value={signInCredentials.password}
                onChange={(e) => {
                  credentialsChangeHandler(e);
                }}
              />
            </div>
            <button type="submit" className={styles.signIn} onClick={(e) => signInHandler(e)}>
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
      <BottomLine />
    </div>
  );
};

export default SignInPage;
