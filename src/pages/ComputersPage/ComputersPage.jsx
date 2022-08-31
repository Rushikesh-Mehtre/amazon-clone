import React from "react";
import Filter from "../../components/Filter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./ComputersPage.module.scss";
import {
  computerItemList,
  laptopImgUrl1,
  laptopImgUrl2,
} from "../../data/ProductsList";
const ComputersPage = () => {
  return (
    <div className={styles.computersPage}>
      <Header />
      <SubHeadBar />
      <div className={styles.computersContent}>
        <div className={styles.filter}>
          <Filter />{" "}
        </div>
        <div className={styles.content}>
          <img src={laptopImgUrl1} className={styles.bannerImg} alt="" />
          <img src={laptopImgUrl2} className={styles.bannerImg} alt="" />
          <p className={styles.subHeader}>
            1-12 of over 80,000 results for <span>Laptops and accessories</span>{" "}
          </p>
          <div className={styles.itemList}>
            {computerItemList.map((item) => (
              <ProductCard
                type="laptop"
                imgUrl={item.imgUrl}
                title={item.title}
                rating={item.rating}
                reviews={item.reviews}
                price={item.price}
                originalPrice={item.originalPrice}
                limitedTimeDeal={item.limitedTimeDeal}
                offerText={item.offerText}
                bestSeller={item.bestSeller}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComputersPage;
