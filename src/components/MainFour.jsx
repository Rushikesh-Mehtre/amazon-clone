import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MainFour.module.scss";
const MainFour = () => {
  const mainContentArray = [
    {
      id: "1",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
      title: "AC",
    },
    {
      id: "2",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
      title: "Refrigators",
    },
    {
      id: "3",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
      title: "Microwaves",
    },
    {
      id: "4",
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
      title: "Washing Machines",
    },
  ];
  return (
    <div className={styles.mainFour}>
      <h3 className={styles.head}>Top picks for your home</h3>
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

export default MainFour;
