import classNames from "classnames";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeadBar from "../../components/SubHeadBar";
import styles from "./GiftsAndCardsPage.module.scss";
import {
  addToAccountImgUrl,
  giftCardsArr,
  giftCardsImgArr1,
  giftCardsImgArr2,
  giftCardsImgArr3,
  giftFilterArr,
} from "../../data/ProductsList";
const GiftsAndCardsPage = () => {
  return (
    <div className={styles.giftsAndCardsPage}>
      {" "}
      <Header />
      <SubHeadBar />
      <div className={styles.top}>
        <p className={styles.head}>
          The Gift Cards Store | <span>A gift of choice</span>{" "}
        </p>
        <p className={styles.subHead}>
          Celebrate every occasion with your loved ones in a special way. Amazon
          India brings to you amazing email gift cards, gift boxes, greeting
          cards and other easy gifting ideas for every occasion such as
          anniversaries, birthdays, weddings, festivals and more.
        </p>
        <div className={styles.imgContainer}>
          {giftCardsImgArr1.map((item) => (
            <img src={item} className={styles.img2} alt="" />
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <img src={addToAccountImgUrl} alt="" />
          {giftFilterArr.map((item) => (
            <div className={styles.filter}>
              <p className={styles.filterTitle}>{item.title}</p>
              {item.values.map((value) => (
                <p className={styles.filterValue}>
                  {" "}
                  <input type="checkbox" /> {value}{" "}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.imgContainer}>
              {giftCardsImgArr2.map((item) => (
                <img src={item} alt="" className={styles.img} />
              ))}
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.imgContainer1}>
              {giftCardsImgArr3.map((item) => (
                <img src={item} alt="" className={styles.img1} />
              ))}
            </div>
          </div>
          <div className={styles.bottom}>
            <p className={styles.head}>
              1-12 of over 2,000 results for <span>Gift Cards</span>
            </p>
            <div className={styles.content}>
              {giftCardsArr.map((item) => (
                <div
                  className={classNames(
                    styles.card,
                    item.bestSeller ? styles.isBestSeller : ""
                  )}
                  id={item.id}
                >
                  {item.bestSeller && (
                    <p className={styles.bestSeller}>Best seller</p>
                  )}
                  <img src={item.imgUrl} alt="" />
                  <div className={styles.description}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.ratings}>
                      {" "}
                      <AiFillStar key={item} className={styles.icon} />
                      <AiFillStar key={item} className={styles.icon} />
                      <AiFillStar key={item} className={styles.icon} />
                      <AiFillStar key={item} className={styles.icon} />
                      <span>{item.ratings}</span>{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GiftsAndCardsPage;
