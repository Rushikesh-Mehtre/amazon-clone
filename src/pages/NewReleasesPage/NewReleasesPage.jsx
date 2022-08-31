import React from "react";
import { BiError } from "react-icons/bi";
import Header from "../../components/Header";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./NewReleasesPage.module.scss";
const NewReleasesPage = () => {
  return (
    <div className={styles.newReleasesPage}>
      <Header />
      <SubHeadBar />
      <p style={{ textAlign: "center", paddingTop: "5rem" }}>
        {" "}
        <BiError style={{ position: "relative", top: "2px" }} />
        New releases page is under construction....
      </p>
    </div>
  );
};

export default NewReleasesPage;
