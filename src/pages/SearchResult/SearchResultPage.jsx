import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./SearchResultPage.module.scss";
import primeChecked from "../../assets/images/checked_prime.png";
import { AiFillStar } from "react-icons/ai";

const SearchResultPage = () => {
  const params = useParams();
  const productItems = [
    {
      id: 1,
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/51hwUO-kAqL._AC_UL270_SR270,270_.jpg",
      title: "Mamaearth Ubtan Natural Face Wash",
      rating: 4,
      reviews: "28,500",
      price: 224,
      keyword: ["facewash", "face-wash", "Facewash", "mamaearth", "Mamaearth", "Face Wash", "Face wash", "Face wash"]
    },
    {
      id: 2,
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/71fVoqRC0wL._AC_UL270_SR270,270_.jpg",
      title: "Iphone 13 witg A14 Bionic chip, the fastest chip ever in a smartphone",
      rating: 4.5,
      reviews: "14,197",
      price: 59999,
      keyword: ["iphone", "Iphone", "IPhone", "Iphone-13", "mobile"]

    },
    {
      id: 3,
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/61Lgm86L29S._AC_UL270_SR270,270_.jpg",
      title: "BenQ EW3270U 32-inch 4K UHD Monitor",
      rating: 4.5,
      reviews: "2,307",
      price: 31990,
      keyword: ["Monitor", "BenQ", "benq", "tv", "monitor"]

    },
    {
      id: 4,
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/81yhmZICzCL._AC_UL270_SR270,270_.jpg",
      title: "Acer Nitro Ultrawide XV340CKP 34 Inch IPS QHD",
      rating: 4.5,
      reviews: "400",
      price: 46999,
      keyword: ["Monitor", "Acer", "acer", "tv", "monitor"]

    },
    {
      id: 5,
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/61unmH6bowL._AC_UL270_SR270,270_.jpg",
      title: "Whiskas Kitten Small (2-12 months) Dry Cat Food",
      rating: 4.5,
      reviews: "11,225",
      price: 360,
      keyword: ["cat food", "Whiskas", "whiskas", "Cat food"]

    },
    {
      id: 6,
      imgUrl:
        "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg",
      title: "2020 Apple MacBook Air Laptop: Apple M1 chip",
      rating: 4.5,
      reviews: "2,601",
      price: 84490,
      keyword: ["apple", "MacBook", "mac book", "Macbook", "laptop", "Laptop"]

    },
    {
      id: 7,
      imgUrl:
        "https://m.media-amazon.com/images/I/610w8MWCkwL._AC_UL480_QL65_.jpg",
      title:
        "Noise ColorFit Ultra SE Smart Watch with 1.75 HD Display, Aluminium Alloy Body",
      rating: 4.5,
      reviews: "25,789",
      price: 3499,
      keyword: ["smartwatch", "Smart Watch", "Noise", "noise", "smart watch", "watch"]

    },
    {
      id: 8,
      imgUrl:
        "https://m.media-amazon.com/images/I/61HXCeozUjL._AC_UY327_FMwebp_QL65_.jpg",
      title:
        "Jbl Tune 760Nc Active Noise Cancellation Bluetooth Wireless Over Ear Headphones with Mic",
      rating: 4.5,
      reviews: "22,653",
      price: 6699,
      keyword: ["smartwatch", "Smart Watch", "jbl", "JBL", "smart watch", "watch"]

    },
  ];
  const resultItems = productItems.filter((item) => item.keyword.includes(params.keyword))
  const mobileArray = [
    {
      title: "SUPCASE iPhone 12 Mini Case Cover",
      titleImgUrl: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f344fd87-8fe5-4cc0-aa76-44652db6033f._CR0,0,500,501_AC_SX130_SY60_QL70_.png",
      mainImgUrl: "https://m.media-amazon.com/images/S/gladiator-image-upload-prod/3/A21TJRUUN4KGV/9fd2ee9a9f16c3bba72fcb8253ce0b3d._CR0,0,0,0_AC_SX130_SY60_QL70_.jpg",
      content: [
        {
          id: "1",
          imgUrl: "https://m.media-amazon.com/images/I/61QUAUK+3cL._AC_SR180,120_QL70_.jpg",
          title: "iPhone 12/ 12 Pro"
        },
        {
          id: "2",
          imgUrl: "https://m.media-amazon.com/images/I/612hQPXM9nL._AC_SR180,120_QL70_.jpg",
          title: "iPhone 12 mini"
        },
        {
          id: "3",
          imgUrl: "https://m.media-amazon.com/images/I/61Mhg6sT-EL._AC_SR180,120_QL70_.jpg",
          title: "iPhone 12 Pro Max"
        },
      ]

    }
  ]
  const monitorArray = [
    {
      title: "Lenovo monitors for an eyeconic visual experience",
      titleImgUrl: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f344fd87-8fe5-4cc0-aa76-44652db6033f._CR0,0,500,501_AC_SX130_SY60_QL70_.png",
      mainImgUrl: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/e68dce6b-51d9-4ddb-b1ca-1a625bc3777c._CR0,0,1200,628_SX507_QL70_.jpg",
      content: [
        {
          id: "1",
          imgUrl: "https://m.media-amazon.com/images/I/51GstKOGp6L._AC_SR230,210_QL70_.jpg",
          title: "Lenovo L-Series 54.6 cm (22 inc…"
        },
        {
          id: "2",
          imgUrl: "https://m.media-amazon.com/images/I/61A098WjyBL._AC_SR230,210_QL70_.jpg",
          title: "Lenovo L-Series 60.45 cm (24 in…"
        },
        {
          id: "3",
          imgUrl: "https://m.media-amazon.com/images/I/61EZlDcz++L._AC_SR230,210_QL70_.jpg",
          title: "Lenovo L-Series 68.6 cm (27 inc…"
        },
      ]

    }
  ]
  const adArray = params.keyword === "monitor" ? monitorArray : params.keyword === "mobile" ? mobileArray : monitorArray;
  const navigate = useNavigate();
  const showItemHandler = (item) => {
    navigate("/itemdetials", { state: item })
  }
  return (
    <div className={styles.searchResultPage}>
      <Header />
      <p className={styles.NumOfResults}>{resultItems.length} results for <span>"{params.keyword}"</span>  </p>

      <div className={styles.searchItems}>
        <div className={styles.filter}></div>

        <div className={styles.content}>
          <div className={styles.ad}>
            {adArray.map((item) => <div className={styles.adItem}>
              <div className={styles.top}>
                <img src={item.titleImgUrl} alt="" />
                <p>{item.title}</p>
              </div>
              <div className={styles.adBlocks}>
                <img src={item.mainImgUrl} className={styles.mainImg} alt="" srcset="" />
                {
                  item.content.map((item) => <div className={styles.adBlock}>
                    <img src={item.imgUrl} alt="" />
                    <p>{item.title}</p>
                  </div>)
                }
              </div>
            </div>)}
          </div>
          <p className={styles.resultHead}>RESULTS</p>
          <div className={styles.list}>
            {
              resultItems.map((item) =>
                <div className={styles.searchItem} >
                  <div className={styles.imgContainer} onClick={() => { showItemHandler(item) }}>
                    <img src={item.imgUrl} className={styles.img} alt="" />
                  </div>
                  <div className={styles.searchItemDetails}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.ratingAndReview}>
                      <span>
                        <AiFillStar className={styles.icon} />
                        <AiFillStar className={styles.icon} />
                        <AiFillStar className={styles.icon} />
                        <AiFillStar className={styles.icon} />
                      </span>
                      <span className={styles.reviews}>
                        {item.reviews && item.reviews}
                      </span>
                    </p>
                    <p className={styles.price}>₹{item.price}</p>

                    <p className={styles.saveExtra}>Save extra with No Cost EMI</p>
                    <p className={styles.primeDelivery}> <img src={primeChecked} alt="" srcset="" />FREE Delivery by Monday  </p>
                  </div>
                </div>
              )
            }
          </div>
        </div>

      </div>

    </div>
  );
};

export default SearchResultPage;
