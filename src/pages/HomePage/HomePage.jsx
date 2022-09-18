import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home from "../../components/Home";
import ImageSlider from "../../components/ImageSlider";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./HomePage.module.scss";
import ProductsSlider from "../../components/ProductsSlider";
import SignInRecommendation from "../../components/SignInRecommendation";
import {
  productsList1,
  productsList2,
  productsList3,
  productsList4,
} from "../../data/ProductsList";
import ProductsOnHome from "../../components/ProductsOnHome";
import { LoggedInContext } from "../../context/LoggedInContext";
const HomePage = () => {
  const { isLoggedIn } = useContext(LoggedInContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [showSideNavbar, setshowSideNavbar] = useState(false);
  const hideSideNavbar = () => {
    setshowSideNavbar(false);
  };
  const showSideNavbarHandler = () => {
    setshowSideNavbar(true);
  };
  return (
    <div className={styles.homePage}>
      <Header showSideNavbar={showSideNavbar} hideSideNavbar={hideSideNavbar} />
      <SubHeadBar showSideNavbarHandler={showSideNavbarHandler} />
      <ImageSlider />
      <Home />
      <ProductsSlider
        productsList={productsList1}
        title="Today's deals"
        link="See all deals"
      />
      <ProductsSlider
        productsList={productsList2}
        title="Curated protective supply products | Amazon Launchpad"
        link="See all safety essentials"
      />
      <ProductsSlider
        productsList={productsList3}
        title="Up to 50% off on kitchen & dining products | Small businesses"
        link="See all offers"
      />
      <ProductsSlider
        productsList={productsList4}
        title="Up to 60% off on home products | Small businesses"
        link="See all offers"
      />
      <ProductsOnHome />
      {!isLoggedIn && <SignInRecommendation />}
      <Footer />
    </div>
  );
};

export default HomePage;
