import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Header from "../../components/Header";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./BuyAgainPage.module.scss";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import RecentlyViewedItems from "../../components/RecentlyViewedItems";
import Footer from "../../components/Footer";
const BuyAgainPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState();
  const searchHandler = () => {
    if (!input) {
      return;
    } else {
      navigate(`/buyagain/search/${input}`);
    }
  };
  const location = useLocation();

  return (
    <div className={styles.buyAgainPage}>
      <Header />
      <SubHeadBar />
      <div className={styles.head}>
        <p className={styles.yourOrders}>
          {location.pathname.includes("/search")
            ? "Search Results"
            : "Your orders"}
        </p>{" "}
        <p className={styles.search}>
          <AiOutlineSearch className={styles.icon} />{" "}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search all orders"
          />
          <button onClick={searchHandler}>Search orders</button>{" "}
        </p>
      </div>
      {!location.pathname.includes("/search") && (
        <div className={styles.orderTypeLinks}>
          <NavLink
            className={(navData) => (navData.isActive ? styles.activeLink : "")}
            to="/buyagain/orders"
          >
            Orders
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? styles.activeLink : "")}
            to="/buyagain/buyagain"
          >
            Buy again
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? styles.activeLink : "")}
            to="/buyagain/notshippedyet"
          >
            Not shipped yet
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? styles.activeLink : "")}
            to="/buyagain/kindleorders"
          >
            Kindle orders
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? styles.activeLink : "")}
            to="/buyagain/cancelledorders"
          >
            Cancelled orders
          </NavLink>
        </div>
      )}
      <div className={styles.orderContent}>
        <Outlet />
      </div>
      <RecentlyViewedItems />
      <Footer />
    </div>
  );
};

export default BuyAgainPage;
