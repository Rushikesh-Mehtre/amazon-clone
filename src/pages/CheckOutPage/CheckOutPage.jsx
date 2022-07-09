import React, { useContext, useEffect } from "react";
import AddedToCartItems from "../../components/AddedToCartItems";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RecentlyViewedItems from "../../components/RecentlyViewedItems";
import SubTotal from "../../components/SubTotal";
import styles from "./CheckOutPage.module.scss";
import { CartItemsContext } from "../../context/CartItemsContext";
import SavedForLaterItems from "../../components/SavedForLaterItems";
import SponsoredProducts from "../../components/SponsoredProducts";
const CheckOutPage = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const { items, saveForLaterItems } = useContext(CartItemsContext);
  const imgUrl =
    "https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg";
  return (
    <div className={styles.checkOutPage}>
      <Header />
      <div className={styles.checkOut}>
        <div className={styles.checkOut_Left}>
          <img src={imgUrl} className={styles.checkOut_Ad} alt="" />
          <div>
            {/* <h2 className={styles.CheckOutTitle}>Shopping Cart
            </h2> */}
            <AddedToCartItems addedToCartItems={items} />
          </div>
        </div>
        <div className={styles.checkOut_Right}>
          {items.length > 0 && <SubTotal />}
          {items.length > 0 && <SponsoredProducts />}
        </div>
      </div>
      {saveForLaterItems.length > 0 && <SavedForLaterItems />}
      <RecentlyViewedItems />
      <Footer />
    </div>
  );
};

export default CheckOutPage;
