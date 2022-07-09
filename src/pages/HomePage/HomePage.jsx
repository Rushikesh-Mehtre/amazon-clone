import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home from "../../components/Home";
import ImageSlider from "../../components/ImageSlider";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./HomePage.module.scss";
import ProductsSlider from "../../components/ProductsSlider";
import SignInRecommendation from "../../components/SignInRecommendation";
const HomePage = () => {
  const productsList1 = [
    {
      id: 1,
      imgUrl: "https://m.media-amazon.com/images/I/41BnHjRP0ZS._AC_SY200_.jpg",
      priceRange: "₹9,990.00-₹35,990.00",
      endsIn: 11000000,
    },
    {
      id: 2,
      imgUrl: "https://m.media-amazon.com/images/I/41bcDPSMueL._AC_SY200_.jpg",
      priceRange: "₹17,990.00-₹70,990.00",
      endsIn: 12000000,
    },
    {
      id: 3,
      imgUrl: "https://m.media-amazon.com/images/I/41y-wyZZ6hL._AC_SY200_.jpg",
      priceRange: "₹12,999.00-₹15,490.00",
      endsIn: 13000000,
    },
    {
      id: 4,
      imgUrl: "https://m.media-amazon.com/images/I/41VDUqScJFL._AC_SY200_.jpg",
      priceRange: "₹499.00-₹20,000.00",
      endsIn: 14000000,
    },
    {
      id: 5,
      imgUrl: "https://m.media-amazon.com/images/I/51Q1tNCJgkS._AC_SY200_.jpg",
      priceRange: "₹509.00-₹9,500.00",
      endsIn: 15000000,
    },
    {
      id: 6,
      imgUrl: "https://m.media-amazon.com/images/I/41cFVJQxEKL._AC_SY200_.jpg",
      priceRange: "₹124.00-₹5,375.00",
      endsIn: 16000000,
    },
    {
      id: 7,
      imgUrl: "https://m.media-amazon.com/images/I/31V8z8+ol9L._AC_SY200_.jpg",
      priceRange: "₹949.00-₹9,999.00",
      endsIn: 17000000,
    },
    {
      id: 1,
      imgUrl: "https://m.media-amazon.com/images/I/31mCcX7rQlS._AC_SY200_.jpg",
      priceRange: "₹299.00-₹2,499.00",
      endsIn: 18000000,
    },
  ];
  const productsList2 = [
    {
      id: 1,
      imgUrl: "https://m.media-amazon.com/images/I/61meh94pj0L._AC_SY200_.jpg",
    },
    {
      id: 2,
      imgUrl: "https://m.media-amazon.com/images/I/71aop0dmDnL._AC_SY200_.jpg",
    },
    {
      id: 3,
      imgUrl: "https://m.media-amazon.com/images/I/71UqqQVKcaS._AC_SY200_.jpg",
    },
    {
      id: 4,
      imgUrl: "https://m.media-amazon.com/images/I/61ZWl87sCQS._AC_SY200_.jpg",
    },
    {
      id: 5,
      imgUrl: "https://m.media-amazon.com/images/I/612FFCYZuFS._AC_SY200_.jpg",
    },
    {
      id: 6,
      imgUrl: "https://m.media-amazon.com/images/I/717VsweVMVS._AC_SY200_.jpg",
    },
    {
      id: 7,
      imgUrl: "https://m.media-amazon.com/images/I/71gjhSELIxL._AC_SY200_.jpg",
    },
    {
      id: 8,
      imgUrl: "https://m.media-amazon.com/images/I/41pCKDeRMzL._AC_SY200_.jpg",
    },
  ];
  const productsList3 = [
    {
      id: 1,
      imgUrl: "https://m.media-amazon.com/images/I/81EYUN0WWwL._AC_SY200_.jpg",
    },
    {
      id: 2,
      imgUrl: "https://m.media-amazon.com/images/I/41dlE8ZX0lL._AC_SY200_.jpg",
    },
    {
      id: 3,
      imgUrl: "https://m.media-amazon.com/images/I/71qtOtlUDFL._AC_SY200_.jpg",
    },
    {
      id: 4,
      imgUrl: "https://m.media-amazon.com/images/I/51R5G379f3L._AC_SY200_.jpg",
    },
    {
      id: 5,
      imgUrl: "https://m.media-amazon.com/images/I/71wlqWjfGNL._AC_SY200_.jpg",
    },
    {
      id: 6,
      imgUrl: "https://m.media-amazon.com/images/I/41Z7IX+HhZL._AC_SY200_.jpg",
    },
    {
      id: 7,
      imgUrl: "https://m.media-amazon.com/images/I/412Tm+THsNL._AC_SY200_.jpg",
    },
    {
      id: 8,
      imgUrl: "https://m.media-amazon.com/images/I/71bl+NtAD6L._AC_SY200_.jpg",
    },
  ];
  const productsList4 = [
    {
      id: 1,
      imgUrl: "https://m.media-amazon.com/images/I/918BT4GJG5L._AC_SY200_.jpg",
    },
    {
      id: 2,
      imgUrl: "https://m.media-amazon.com/images/I/71b1xh2Dm8L._AC_SY200_.jpg",
    },
    {
      id: 3,
      imgUrl: "https://m.media-amazon.com/images/I/81x5wCYdNXL._AC_SY200_.jpg",
    },
    {
      id: 4,
      imgUrl: "https://m.media-amazon.com/images/I/71291JsJDLL._AC_SY200_.jpg",
    },
    {
      id: 5,
      imgUrl: "https://m.media-amazon.com/images/I/810vmBDwfeL._AC_SY200_.jpg",
    },
    {
      id: 6,
      imgUrl: "https://m.media-amazon.com/images/I/61rVevaZbJL._AC_SY200_.jpg",
    },
    {
      id: 7,
      imgUrl: "https://m.media-amazon.com/images/I/71EPeQ8tcaS._AC_SY200_.jpg",
    },
    {
      id: 8,
      imgUrl: "https://m.media-amazon.com/images/I/81yinkPLkVL._AC_SY200_.jpg",
    },
  ];
  return (
    <div className={styles.homePage}>
      <Header />
      <SubHeadBar />
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

      <SignInRecommendation />
      <Footer />
    </div>
  );
};

export default HomePage;
