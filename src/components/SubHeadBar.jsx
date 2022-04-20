import React from "react";
import styles from "../styles/SubHeadBar.module.scss";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const SubHeadBar = () => {
  const adImgPath =
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Pay/CBCC/Refresh/swm4._CB658029568_.jpg";
  return (
    <div className={styles.subHeadBar}>
      <div className={styles.left}>
        <Link to="/health&household">
          <GiHamburgerMenu className={styles.hamMenu} />
          All
        </Link>
        <Link to="/health&household">Mobiles</Link>
        <Link to="/health&household">Computers</Link>
        <Link to="/health&household">New Releases</Link>
        <Link to="/health&household">Gift Cards</Link>
        <Link to="/health&household">Buy Again</Link>
        <Link to="/health&household">Gift Ideas</Link>
        <Link to="/health&household">Home Improvement</Link>
        <Link to="/health&household">Amazon Basics</Link>
        <Link to="/health&household">Health,Household & Personal care</Link>
      </div>
      <div className={styles.right}>
        <Link to="/signin">
          <img src={adImgPath} alt="ad" />
        </Link>
      </div>
    </div>
  );
};

export default SubHeadBar;
