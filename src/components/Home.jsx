import React from "react";
import styles from "../styles/Home.module.scss";
import homeImg from "../assets/images/home-image-1.jpg";
import Product from "./Product";
import MainOne from "./MainOne";
import MainTwo from "./MainTwo";
import MainThree from "./MainThree";
import MainFour from "./MainFour";
import MainFive from "./MainFive";
import MainSix from "./MainSix";
const Home = () => {
  const productList1 = [
    {
      id: "123456",
      title:
        "Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB, 256GB Storage) + Samsung Galaxy Watch4",
      rating: 3,
      price: 112999,
      imgUrl: "https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg",
    },
    {
      id: "2245351",
      title:
        "HP Laserjet Pro M1136 Printer, Print, Copy, Scan, Compact Design, Reliable, and Fast Printing",
      rating: 4,
      price: 23499.0,
      imgUrl: "https://m.media-amazon.com/images/I/41Ojwr5P8SL.jpg",
    },
  ];
  const productList2 = [
    {
      id: "151521",
      title:
        "2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard",
      rating: 4,
      price: 109490,
      imgUrl: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
    },
    {
      id: "246231531",
      title:
        "Redmi 139 cm (55 inches) 4K Ultra HD Android Smart LED TV X55|L55M6-RA (Black) (2021 Model)",
      rating: 5,
      price: 42499,
      imgUrl: "https://m.media-amazon.com/images/I/61zpVaJStWL._SX450_.jpg",
    },
    {
      id: "22631",
      title:
        "Life's Amazing Secrets: How to Find Balance and Purpose in Your Life | Inspirational Zen book on motivation, self-development & healthy living",
      rating: 4,
      price: 150,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51PJyvcfPGL._SX321_BO1,204,203,200_.jpg",
    },
  ];
  const productList3 = [
    {
      id: "131613613",
      title:
        "Ikigai: The Japanese secret to a long and happy life : by Hector Garcia",
      rating: 3,
      price: 308,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg",
    },
    {
      id: "28644854",
      title: "Apple iPhone 13 (256GB) - (Product) RED",
      rating: 4,
      price: 84990,
      imgUrl: "https://m.media-amazon.com/images/I/71gm8v4uPBL._SX679_.jpg",
    },
    {
      id: "3274327",
      title:
        "Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band",
      rating: 4,
      price: 23499.0,
      imgUrl: "https://m.media-amazon.com/images/I/71EoGntO5bL._SX679_.jpg",
    },
    {
      id: "4427417",
      title:
        "boAt Rockerz 370 Bluetooth Wireless On Ear Headphone with Mic (Buoyant Black)",
      rating: 4,
      price: 999.0,
      imgUrl: "https://m.media-amazon.com/images/I/61kWB+uzR2L._SY450_.jpg",
    },
  ];
  return (
    <div className={styles.home}>
      <div className={styles.home_Container}>
        {/* <img src={homeImg} className={styles.homeImg} alt="" /> */}
        <div className={styles.homeContentA}>
          <MainOne />
          <MainTwo />
          <MainFive />
          <MainThree />
          <MainFour />
          <MainSix />
        </div>
        <div className={styles.home_Row}>
          {productList1.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                image={item.imgUrl}
              />
            );
          })}
        </div>
        <div className={styles.home_Row}>
          {productList2.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                image={item.imgUrl}
              />
            );
          })}
        </div>
        <div className={styles.home_Row}>
          {productList3.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                image={item.imgUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
