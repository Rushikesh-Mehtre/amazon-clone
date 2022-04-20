import React from "react";
import CenterContent from "../../components/CenterContent";
import Header from "../../components/Header";
import LeftColumn from "../../components/LeftColumn";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./HealthHouseHold.module.scss";
const HealthHouseHold = () => {
  return (
    <div className={styles.healthHouseHold}>
      <Header />
      <SubHeadBar />
      <div className={styles.content}>
        <LeftColumn />
        <CenterContent />
      </div>
    </div>
  );
};

export default HealthHouseHold;
