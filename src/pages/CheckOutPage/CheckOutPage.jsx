import React, { useEffect } from "react";
import AddedToCartItems from "../../components/AddedToCartItems";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RecentlyViewedItems from "../../components/RecentlyViewedItems";
import SubTotal from "../../components/SubTotal";
import styles from "./CheckOutPage.module.scss";
import SponsoredProducts from "../../components/SponsoredProducts";
import { useSelector } from "react-redux";
import SavedForLaterItems from "../../components/SavedForLaterItems";
const CheckOutPage = () => {
  const addedToCartProducts = useSelector((state) => state.addedToCartProducts.addedToCartProducts);
  // useEffect(() => {
  //   window.scroll(0, 0);
  // }, [addedToCartProducts]);
  console.log("addedToCartProducts", addedToCartProducts);
  const savedForLaterProducts = useSelector((state) => state.savedForLaterProducts.savedForLaterProducts);
  const imgUrl = "https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg";
  return (
    <div className={styles.checkOutPage}>
      <Header />
      <div className={styles.checkOut}>
        <div className={styles.checkOut_Left}>
          <img src={imgUrl} className={styles.checkOut_Ad} alt="" />
          <div>
            {/* <h2 className={styles.CheckOutTitle}>Shopping Cart
            </h2> */}
            <AddedToCartItems />
          </div>
        </div>
        <div className={styles.checkOut_Right}>
          {addedToCartProducts.length > 0 && <SubTotal />}
          {addedToCartProducts.length > 0 && <SponsoredProducts />}
        </div>
      </div>
      {savedForLaterProducts.length > 0 && <SavedForLaterItems />}
      <RecentlyViewedItems />
      <Footer />
    </div>
  );
};

export default CheckOutPage;
