import React from "react";
import Filter from "../../components/Filter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./MobilesPage.module.scss";
import {
  mobileItemList,
  mobileImgUrl1,
  mobileImgUrl2,
} from "../../data/ProductsList";
const MobilesPage = () => {
  return (
    <div className={styles.mobilesPage}>
      <Header />
      <SubHeadBar />
      <div className={styles.mobilesContent}>
        <div className={styles.filter}>
          <Filter />{" "}
        </div>
        <div className={styles.content}>
          <img src={mobileImgUrl1} className={styles.bannerImg} alt="" />
          <img src={mobileImgUrl2} className={styles.bannerImg} alt="" />
          <p className={styles.subHeader}>
            1-12 of over 80,000 results for <span>Mobiles & Accessories</span>{" "}
          </p>
          <div className={styles.itemList}>
            {mobileItemList.map((item) => (
              <ProductCard
                type="mobile"
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

export default MobilesPage;
