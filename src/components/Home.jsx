import React from "react";
import styles from "../styles/Home.module.scss";
import MainOne from "./MainOne";
import MainTwo from "./MainTwo";
import MainThree from "./MainThree";
import MainFour from "./MainFour";
import MainFive from "./MainFive";
import MainSix from "./MainSix";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_Container}>
        <div className={styles.homeContentA}>
          <MainOne />
          <MainTwo />
          <MainFive />
          <MainThree />
          <MainFour />
          <MainSix />
        </div>

      </div>
    </div>
  );
};

export default Home;
