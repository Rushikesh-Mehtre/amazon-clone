import styles from "../styles/ProductsSlider.module.scss";
import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import { AiFillStar } from "react-icons/ai";
import { CartItemsContext } from "../context/CartItemsContext";
const ProductsSlider = ({ title, productsList, link, type }) => {
  console.log(productsList)
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
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const { dispatchItemEvent } = useContext(CartItemsContext);
  const addItemHandler = (id, img, priceRange, price, title, rating, reviews) => {
    console.log("lets add item")
    dispatchItemEvent('ADD_ITEM', { id, img, priceRange, price, title, rating, reviews });

  }
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
              {item.title && (
                <p className={styles.title}>{item.title.substring(0, 20)}...</p>
              )}
              {item.rating && item.reviews && (
                <p className={styles.ratingAndReview}>
                  <span>
                    <AiFillStar className={styles.icon} />
                    <AiFillStar className={styles.icon} />
                    <AiFillStar className={styles.icon} />
                    <AiFillStar className={styles.icon} />
                  </span>
                  <span className={styles.reviews}>
                    {item.reviews && item.reviews}
                  </span>
                </p>
              )}
              {item.price && <p className={styles.price}>₹{item.price}</p>}
              {item.price && (
                <button className={styles.addToCart} onClick={() => addItemHandler(item.id, item.imgUrl, item.priceRange, item.price, item.title, item.rating, item.reviews)}>Add to cart</button>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
