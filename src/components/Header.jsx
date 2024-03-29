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
import LeftMenuBar from "./LeftMenuBar";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../features/Userlogin/UserLoginSlice";

const Header = ({ showSideNavbar, hideSideNavbar }) => {
  const isUserLoggedIn = useSelector((state) => state.userLogin.isUserLoggedIn);
  const addedToCartProducts = useSelector((state) => state.addedToCartProducts.addedToCartProducts);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState();
  const searchHandler = () => {
    if (!input) {
      navigate("/");
    } else {
      navigate(`/search/${input}`);
    }
  };
  // const { dispatchItemEvent } = useContext(CartItemsContext);
  const LogOutHandler = () => {
    dispatch(logOutUser());
    // dispatchLogInEvent("LOG_OUT");
    // dispatchItemEvent("REMOVE_ALL_ITEMS");
    navigate("/");
  };
  const [pinCode, setPinCode] = useState();
  const onPINSelect = (pin) => {
    setPinCode(pin);
  };
  const searchCategoryList = [
    "All Categories",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Fashion",
    "Amazon Fresh",
    "Amazon Pharmacy",
    "Appliances",
    "Apps & Games",
    "Baby",
    "Beauty",
    "Books",
    "Car & Motorbike",
    "Clothing & Accessories",
    "Collectibles",
    "Computers & Accessories",
    "Deals",
    "Electronics",
    "Furniture",
    "Garden & Outdoors",
    "Gift Cards",
    "Grocery & Gourmet Foods",
    "Health & Personal Care",
    "Home & Kitchen",
    "Industrial & Scientific",
    "Jewellery",
    "Kindle Store",
    "Luggage & Bags",
    "Luxury Beauty",
    "Movies & TV Shows",
    "Music",
  ];

  return (
    <div className={styles.header}>
      {showSideNavbar && <LeftMenuBar hideSideNavbar={hideSideNavbar} />}
      <Link to="/">
        <img src={logo} className={styles.header_Logo} alt="" />
      </Link>
      <div className={styles.header_Location}>
        <LocationOnIcon className={styles.locationIcon} />
        <div className={styles.text}>
          <span className={styles.locationLineOne}>
            {isUserLoggedIn ? "Deliver to Rushikesh" : pinCode ? "Deliver to" : "Hello"}
          </span>
          <span className={styles.locationLineTwo}>
            {isUserLoggedIn ? "LATUR 413512" : pinCode ? pinCode : <LocationModal onPINSelect={onPINSelect} />}
          </span>
        </div>
      </div>
      <div className={styles.header_Search}>
        <select name="" id="" className={styles.selectionOption}>
          {searchCategoryList.map((item) => (
            <option>{item}</option>
          ))}
        </select>
        <input
          type="text"
          className={styles.header_Search_Input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchIcon className={styles.header_SearchIcon} onClick={searchHandler} />
      </div>
      <div className={styles.header_Nav}>
        <div className={styles.header_Option}>
          <span className={styles.header_Option_Lineone}>Hello {isUserLoggedIn ? "User" : "guest"}</span>
          {isUserLoggedIn ? (
            <p onClick={LogOutHandler} className={styles.header_Option_Linetwo}>
              Log out
            </p>
          ) : (
            <Link to="/signin" className={styles.header_Option_Linetwo}>
              Sign in
            </Link>
          )}
        </div>
        <div className={styles.header_Option} onClick={() => navigate("/returns&orders")}>
          <span className={styles.header_Option_Lineone}>Returns</span>
          <span className={styles.header_Option_Linetwo}>& Orders</span>
        </div>
        <div className={styles.header_Option} onClick={() => navigate("/prime")}>
          <span className={styles.header_Option_Lineone}>Your</span>
          <span className={styles.header_Option_Linetwo}>Prime</span>
        </div>
        <div className={styles.header_OptionBasket}>
          <Link to="/checkout" className={styles.link}>
            {" "}
            <BsCart3 className={styles.cartIcon} />
            Cart
            <span className={classNames(styles.header_Option_Linetwo, styles.header_BasketCount)}>
              {addedToCartProducts.length > 0 ? addedToCartProducts.length : ""}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
