import React from "react";
import Header from "../../components/Header";
import Home from "../../components/Home";
import ImageSlider from "../../components/ImageSlider";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <SubHeadBar />
      <ImageSlider />
      <Home />
    </div>
  );
};

export default HomePage;
