import React from "react";
import { BiError } from "react-icons/bi";
import Header from "../../components/Header";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./HealthAndPersonalCarePage.module.scss";
const HealthAndPersonalCarePage = () => {
  return (
    <div className={styles.healthAndPersonalCarePage}>
      <Header />
      <SubHeadBar />
      <p style={{ textAlign: "center", paddingTop: "5rem" }}>
        {" "}
        <BiError style={{ position: "relative", top: "2px" }} /> Health and
        personal care page is under construction....
      </p>
    </div>
  );
};

export default HealthAndPersonalCarePage;
