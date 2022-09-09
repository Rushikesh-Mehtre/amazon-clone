import React from "react";
import { BiError } from "react-icons/bi";
import Header from "../../components/Header";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./MyPrimePage.module.scss";
const MyPrimePage = () => {
  return (
    <div className={styles.myPrimePage}>
      <Header />
      <SubHeadBar />
      <p style={{ textAlign: "center", paddingTop: "5rem" }}>
        {" "}
        <BiError style={{ position: "relative", top: "2px" }} /> Prime page is
        under construction....
      </p>
    </div>
  );
};

export default MyPrimePage;