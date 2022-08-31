import React from "react";
import { BiError } from "react-icons/bi";
import Header from "../../components/Header";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./GiftsAndCardsPage.module.scss";
const GiftsAndCardsPage = () => {
  return (
    <div className={styles.giftsAndCardsPage}>
      {" "}
      <Header />
      <SubHeadBar />
      <p style={{ textAlign: "center", paddingTop: "5rem" }}>
        {" "}
        <BiError style={{ position: "relative", top: "2px" }} /> Gifts and cards
        page is under construction....
      </p>
    </div>
  );
};

export default GiftsAndCardsPage;
