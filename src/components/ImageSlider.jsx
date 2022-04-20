import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/ImageSlider.module.scss";
import homeImg1 from "../assets/images/home-image-1.jpg";
import homeImg10 from "../assets/images/home-image-10.jpg";
import homeImg2 from "../assets/images/home-image-2.jpg";
import homeImg3 from "../assets/images/home-image-3.jpg";
import homeImg4 from "../assets/images/home-image-4.jpg";
import homeImg5 from "../assets/images/home-image-5.jpg";
import homeImg6 from "../assets/images/home-image-6.jpg";
import homeImg7 from "../assets/images/home-image-7.jpg";
import homeImg8 from "../assets/images/home-image-8.jpg";
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.imageSlider}>
      <Slider {...settings}>
        <div className={styles.imgContainer}>
          <img src={homeImg1} alt="" />
        </div>
        <div className={styles.imgContainer}>
          <img src={homeImg10} alt="" />
        </div>
        <div className={styles.imgContainer}>
          <img src={homeImg2} alt="" />
        </div>
        <div className={styles.imgContainer}>
          <img src={homeImg3} alt="" />
        </div>
        <div className={styles.imgContainer}>
          <img src={homeImg4} alt="" />
        </div>
        <div className={styles.imgContainer}>
          <img src={homeImg5} alt="" />
        </div>
        <div className={styles.imgContainer}>
          <img src={homeImg6} alt="" />
        </div>
        <div className={styles.imgContainer}>
          <img src={homeImg7} alt="" />
        </div>
        <div className={styles.imgContainer}>
          <img src={homeImg8} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
