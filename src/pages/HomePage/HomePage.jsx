import React from "react";
import Header from "../../components/Header";
import Home from "../../components/Home";
import ImageSlider from "../../components/ImageSlider";
import styles from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <ImageSlider />
      <Home />
    </div>
  );
};

export default HomePage;
