import React, { useState } from "react";
import styles from "../styles/Header.module.scss";
import logo from "../assets/images/amazon.png";
import SearchIcon from "@mui/icons-material/Search";
// import { ShoppingBasketOutlined } from "@mui/icons-material";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { useStateValue } from "../context/StateProvider";
import LocationModal from "./LocationModal";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  // const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [input, setInput] = useState();
  const searchHandler = () => {
    if (!input) {
      navigate("/");
    } else {
      navigate(`/search/${input}`);
      console.log(input);
    }
  };
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} className={styles.header_Logo} alt="" />
      </Link>
      <div className={styles.header_Location}>
        <LocationOnIcon className={styles.locationIcon} />
        <div className={styles.text}>
          <span className={styles.locationLineOne}>Hello</span>
          <span className={styles.locationLineTwo}>
            <LocationModal />
          </span>
        </div>
      </div>
      <div className={styles.header_Search}>
        <select name="" id="" className={styles.selectionOption}>
          <option selected value="">
            All
          </option>
          <option value="">Alexa skills</option>
          <option value="">Amazon devices</option>
          <option value="">Appliances</option>
          <option value="">Apps and games</option>
        </select>
        <input
          type="text"
          className={styles.header_Search_Input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchIcon
          className={styles.header_SearchIcon}
          onClick={searchHandler}
        />
      </div>
      <div className={styles.header_Nav}>
        <div className={styles.header_Option}>
          <span className={styles.header_Option_Lineone}>Hello guest</span>
          <Link to="/signin" className={styles.header_Option_Linetwo}>
            Sign in
          </Link>
        </div>
        <div className={styles.header_Option}>
          <span className={styles.header_Option_Lineone}>Returns</span>
          <span className={styles.header_Option_Linetwo}>& Orders</span>
        </div>
        <div className={styles.header_Option}>
          <span className={styles.header_Option_Lineone}>Your</span>
          <span className={styles.header_Option_Linetwo}>Prime</span>
        </div>
        <div className={styles.header_OptionBasket}>
          <Link to="/checkout" className={styles.link}>
            {" "}
            <BsCart3 className={styles.cartIcon} />
            Cart
            <span
              className={classNames(
                styles.header_Option_Linetwo,
                styles.header_BasketCount
              )}
            >
              5{/* {basket.length} */}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
