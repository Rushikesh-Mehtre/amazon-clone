import React from "react";
import { BiError } from "react-icons/bi";
import Header from "../../components/Header";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./BuyAgainPage.module.scss";
const BuyAgainPage = () => {
  return (
    <div className={styles.buyAgainPage}>
      <Header />
      <SubHeadBar />
      <p style={{ textAlign: "center", paddingTop: "5rem" }}>
        {" "}
        <BiError style={{ position: "relative", top: "2px" }} /> Buy again page
        is under construction....
      </p>
    </div>
  );
};

export default BuyAgainPage;
