import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MainOne.module.scss";
const MainOne = () => {
  const mainContentArray = [
    {
      id: "1",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_1x._SY116_CB627443840_.jpg",
      title: "Smart LED TVs",
    },
    {
      id: "2",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Appliances_1x._SY116_CB627444559_.jpg",
      title: "Appliances",
    },
    {
      id: "3",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg",
      title: "Furniture",
    },
    {
      id: "4",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Kitchen_1x._SY116_CB627276315_.jpg",
      title: "Kitchen products",
    },
  ];
  return (
    <div className={styles.mainOne}>
      <h3 className={styles.head}>Upgrade your home | Amazon Brands & more</h3>
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
      <Link to="#">See more</Link>
    </div>
  );
};

export default MainOne;
