import styles from "../styles/ProductsSlider.module.scss";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
const ProductsSlider = ({ title, productsList, link }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black",
          background: "rgb(232 227 227)",
          opacity: "0.8",
          marginRight: "35px",
          padding: "4rem 1rem",
          zIndex: 99,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black",
          background: "rgb(232 227 227)",
          opacity: "0.8",
          marginLeft: "35px",
          padding: "4rem 1rem",
          zIndex: 99,
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    // arrows: false,
    // infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={styles.productsSlider}>
      <div className={styles.header}>
        <p className={styles.head}>{title}</p>
        <Link to="#">{link}</Link>
      </div>
      <Slider {...settings}>
        {productsList.map((item) => {
          return (
            <div key={item.id} className={styles.productItem}>
              <img src={item.imgUrl} className={styles.img} alt="" />
              {item.priceRange && (
                <p className={styles.priceRange}>{item.priceRange} </p>
              )}
              {item.endsIn && (
                <p className={styles.endsIn}>
                  Ends in :{" "}
                  <Countdown key={item.id} date={Date.now() + item.endsIn} />
                </p>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
