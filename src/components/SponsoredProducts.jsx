import React, { useContext } from 'react'
import styles from "../styles/SponsoredProducts.module.scss";
import { AiFillStar } from "react-icons/ai";
import { CartItemsContext } from "../context/CartItemsContext";
import Countdown from "react-countdown";

const SponsoredProducts = () => {
    const sponsoredProducts = [
        {
            id: 1,
            imgUrl:
                "https://m.media-amazon.com/images/I/71d8VKmjzeL._AC_AA180_.jpg",
            title: "Beardo Dark Side Perfume For Men, 100 ml | EAU DE PARFUM | Premium Long Lasting Fragrance",
            rating: 4,
            reviews: "5,500",
            price: 725,
        },
        {
            id: 2,
            imgUrl:
                "https://images-eu.ssl-images-amazon.com/images/I/514tSWVYPlL._SX300_SY300_QL70_FMwebp_.jpg",
            title: "Lenovo Casual Laptop Backpack B210 39.62 cm (15.6-inch) Water Repellent Blue",
            rating: 4,
            reviews: "40113",
            price: 929,
        },
        {
            id: 3,
            imgUrl:
                "https://m.media-amazon.com/images/I/71H-bP2XDlL._SY550_PIbundle-12,TopRight,0,0_SX352SY550SH20_.jpg",
            title: "Pintola All Natural Peanut Butter (Crunchy) (1kg (Pack of 1)) | Unsweetened ",
            rating: 4.5,
            reviews: "45632",
            price: 399,
        },
        {
            id: 4,
            imgUrl:
                "https://m.media-amazon.com/images/I/61sVO8efwzS._SX679_.jpg",
            title: "Wipro Garnet 6W LED Table Lamp - 3 Grade Dimming and Color Changing (Pack of 1, Cool Day Light/Neutral White/Warm White)",
            rating: 4.5,
            reviews: "15201",
            price: 1299,
        }
    ];
    const { dispatchItemEvent } = useContext(CartItemsContext);
    const addItemHandler = (id, img, priceRange, price, title, rating, reviews) => {
        dispatchItemEvent('ADD_ITEM', { id, img, priceRange, price, title, rating, reviews });

    }
    return (
        <div className={styles.sponsoredProducts}>
            <p className={styles.head}>Sponsored Products related to items in your cart</p>
            <div className={styles.products}>
                {sponsoredProducts.map((item) => {
                    return (
                        <div key={item.id} className={styles.productItem}>
                            <img src={item.imgUrl} className={styles.img} alt="" />
                            <div className={styles.right}>{item.priceRange && (
                                <p className={styles.priceRange}>{item.priceRange} </p>
                            )}
                                {item.endsIn && (
                                    <p className={styles.endsIn}>
                                        Ends in :{" "}
                                        <Countdown key={item.id} date={Date.now() + item.endsIn} />
                                    </p>
                                )}
                                {item.title && (
                                    <p className={styles.title}>{item.title.substring(0, 20)}...</p>
                                )}
                                {item.rating && item.reviews && (
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
                                )}
                                {item.price && <p className={styles.price}>₹{item.price}</p>}
                                {item.price && (
                                    <button className={styles.addToCart} onClick={() => addItemHandler(item.id, item.imgUrl, item.priceRange, item.price, item.title, item.rating, item.reviews)}>Add to cart</button>
                                )}</div>

                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default SponsoredProducts