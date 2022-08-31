import React from "react";
import Header from "../../components/Header";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./ReturnsAndOrders.module.scss";
import { BiError } from "react-icons/bi";

const ReturnsAndOrders = () => {
  return (
    <div className={styles.returnsAndOrders}>
      <Header />
      <SubHeadBar />
      <p style={{ textAlign: "center", paddingTop: "5rem" }}>
        <BiError style={{ position: "relative", top: "2px" }} /> Returns and
        orders page is under construction...
      </p>
    </div>
  );
};

export default ReturnsAndOrders;
