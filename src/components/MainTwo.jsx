import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MainTwo.module.scss";
const MainTwo = () => {
  const mainContentArray = [
    {
      id: "1",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/Flight_186x116._SY116_CB653435429_.jpg",
      title: "Flight tickets",
    },
    {
      id: "2",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/Bus_186x116._SY116_CB653435429_.jpg",
      title: "Bus Tickets",
    },
    {
      id: "3",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/Train_186x116._SY116_CB653435429_.jpg",
      title: "Train Tickets",
    },
    {
      id: "4",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/November/GWPercolate/essential_186x116._SY116_CB653435429_.jpg",
      title: "Essential Travel Products",
    },
  ];
  return (
    <div className={styles.mainTwo}>
      <h3 className={styles.head}>Amazon Pay | Book your travel tickets</h3>
      <div className={styles.mainContent}>
        {mainContentArray.map((item) => {
          return (
            <div className={styles.mainContentItem} key={item.id}>
              <img src={item.imgUrl} alt="" />
              <p className={styles.title}>{item.title}</p>
            </div>
          );
        })}
      </div>
      <Link to="#">Explore more from Amazon Pay</Link>
    </div>
  );
};

export default MainTwo;
