import React from "react";
import styles from "../styles/SubHeadBar.module.scss";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const SubHeadBar = ({ showSideNavbarHandler }) => {
  const adImgPath =
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Pay/CBCC/Refresh/swm4._CB658029568_.jpg";
  return (
    <div className={styles.subHeadBar}>
      <div className={styles.left}>
        <Link to="/#" onClick={showSideNavbarHandler}>
          <GiHamburgerMenu className={styles.hamMenu} />
          All
        </Link>
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/computers">Computers</Link>
        <Link to="/giftandcards">Gift Cards</Link>
        <Link to="/buyagain">Buy Again</Link>
        <Link to="/prime">Prime</Link>
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
