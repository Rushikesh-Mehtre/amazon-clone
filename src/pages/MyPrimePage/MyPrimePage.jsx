import React from "react";
import Header from "../../components/Header";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./MyPrimePage.module.scss";
import primeImg from "../../assets/images/prime.png";
import Footer from "../../components/Footer";
import {
  primeCardsArr,
  primeEntertainmentArr,
  primeExploreArr,
  primeMusicArr,
  primeReadingArr,
  savingsIcon1,
  savingsIcon2,
} from "../../data/ProductsList";
const MyPrimePage = () => {
  return (
    <div className={styles.myPrimePage}>
      <Header />
      <SubHeadBar />
      <div className={styles.header}>
        <img src={primeImg} alt="" srcset="" />
        <p>Manage My Membership</p>
        <p>Help</p>
      </div>
      <div className={styles.mainImg}>
        <div className={styles.content}>
          <p className={styles.contentHead}>Welcome back, rushikesh! </p>
          <p className={styles.contentsubHead}>
            New TV show, included with your Prime.{" "}
          </p>
        </div>
      </div>
      <div className={styles.primeFeaturesCards}>
        {primeCardsArr.map((item) => (
          <div key={item.id} className={styles.featureCard}>
            <p className={styles.title}>{item.title}</p>
            <img src={item.imgUrl} alt="" />
            <p className={styles.description}>{item.description}</p>
            <p className={styles.link}>
              {item.id === 1
                ? "Explore more"
                : item.id === 2
                ? "Learn more"
                : item.id === 3
                ? "Listen now"
                : "Apply now"}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.primeSavings}>
        <p className={styles.header}>
          {" "}
          <span>PRIME SAVINGS</span>
          <span>₹2,343</span>
        </p>
        <div className={styles.primeContent}>
          <p>
            <img src={savingsIcon1} alt="" />
            <span>₹2,020 Delivery savings</span>
          </p>
          <p>
            <img src={savingsIcon2} alt="" />
            <span>₹323 Deals savings</span>
          </p>
        </div>
      </div>
      <div className={styles.primeEntertainment}>
        <p className={styles.header}>
          {" "}
          <span>Prime Entertainment</span>
        </p>
        <div className={styles.entertainmentContent}>
          <p className={styles.head}>
            See all movies & TV shows on Prime Video
          </p>
          <div className={styles.imgContainer}>
            {primeEntertainmentArr.map((item) => (
              <img src={item} alt="" />
            ))}
          </div>
        </div>
        <div className={styles.entertainmentContent}>
          <p className={styles.head}>Popular in Prime Music</p>
          <div className={styles.imgContainer}>
            {primeMusicArr.map((item) => (
              <img src={item} alt="" />
            ))}
          </div>
        </div>
        <div className={styles.entertainmentContent}>
          <p className={styles.head}>Trending in Prime Reading</p>
          <div className={styles.imgContainer}>
            {primeReadingArr.map((item) => (
              <img src={item} alt="" />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.primeExplore}>
        <p className={styles.header}>
          {" "}
          <span>EXPLORE MY PRIME</span>
        </p>
        <div className={styles.explorePrimeContent}>
          {primeExploreArr.map((item) => (
            <div className={styles.exploreCard} id={item.id}>
              <img src={item.imgUrl} alt="" srcset="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPrimePage;
