import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MainThree.module.scss";
const MainThree = () => {
  const mainContentArray = [
    {
      id: "1",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg",
      title: "Women's Clothing",
    },
    {
      id: "2",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/6-min._SY116_CB666463598_.jpg",
      title: "Footwear + Handbags",
    },
    {
      id: "3",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/8-min._SY116_CB666463598_.jpg",
      title: "Watches",
    },
    {
      id: "4",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/7-min._SY116_CB666463598_.jpg",
      title: "Fashion Jewellery",
    },
  ];
  return (
    <div className={styles.mainThree}>
      <h3 className={styles.head}>Styles for Women | Up to 70% off</h3>
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

export default MainThree;
