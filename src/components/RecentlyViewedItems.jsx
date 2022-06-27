import React from "react";
import styles from "../styles/RecentlyViewedItems.module.scss";
import ProductsSlider from "./ProductsSlider";
const RecentlyViewedItems = () => {
  const recentlyViewedItemsList = [
    {
      id: 1,
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/51hwUO-kAqL._AC_UL270_SR270,270_.jpg",
      title: "Mamaearth Ubtan Natural Face Wash",
      rating: 4,
      reviews: "28,500",
      price: 224,
    },
    {
      id: 2,
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/71fVoqRC0wL._AC_UL270_SR270,270_.jpg",
      title: "A14 Bionic chip, the fastest chip ever in a smartphone",
      rating: 4.5,
      reviews: "14,197",
      price: 59999,
    },
    {
      id: 3,
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/61Lgm86L29S._AC_UL270_SR270,270_.jpg",
      title: "BenQ EW3270U 32-inch 4K UHD Monitor",
      rating: 4.5,
      reviews: "2,307",
      price: 31990,
    },
    {
      id: 4,
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/81yhmZICzCL._AC_UL270_SR270,270_.jpg",
      title: "Acer Nitro Ultrawide XV340CKP 34 Inch IPS QHD",
      rating: 4.5,
      reviews: "400",
      price: 46999,
    },
    {
      id: 5,
      imgUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/61unmH6bowL._AC_UL270_SR270,270_.jpg",
      title: "Whiskas Kitten Small (2-12 months) Dry Cat Food",
      rating: 4.5,
      reviews: "11,225",
      price: 360,
    },
    {
      id: 6,
      imgUrl:
        "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg",
      title: "2020 Apple MacBook Air Laptop: Apple M1 chip",
      rating: 4.5,
      reviews: "2,601",
      price: 84490,
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
    },
  ];
  return (
    <div className={styles.recentlyViewedItems}>
      <ProductsSlider
        title="Your recently viewed items"
        productsList={recentlyViewedItemsList}
        type="recentlyViewed"
      />
    </div>
  );
};

export default RecentlyViewedItems;
