import React from 'react'
import styles from "../styles/Filter.module.scss";
import { AiFillStar } from "react-icons/ai";

const Filter = () => {
    const filterArray = [
        {
            id: 1,
            title: "Made for Amazon Brands",
            options: [
                {
                    id: 1,
                    option: "Made for Amazon"
                }
            ]
        },
        {
            id: 2,
            title: "Amazon Prime",
            options: [
                {
                    id: 1,
                    option: "Prime"
                }
            ]
        },
        {
            id: 3,
            title: "Pay On Delivery",
            options: [
                {
                    id: 1,
                    option: "Eligible for COD"
                }
            ]
        },
        {
            id: 10,
            title: "Avg. Customer Review",
            options: [
                {
                    id: 1,
                    option: 4
                },
                {
                    id: 1,
                    option: 3
                },
                {
                    id: 1,
                    option: 2
                },
                {
                    id: 1,
                    option: 1
                },
            ]
        },
        {
            id: 4,
            title: "New Arrivals",
            options: [
                {
                    id: 1,
                    option: "Last 30 days"
                },
                {
                    id: 2,
                    option: "Last 90 days"
                },
            ]
        },
        {
            id: 4,
            title: "Item Condition",
            options: [
                {
                    id: 1,
                    option: "New"
                },
                {
                    id: 2,
                    option: "Renewed"
                },
                {
                    id: 3,
                    option: "Used"
                },
            ]
        },
        {
            id: 5,
            title: "Price",
            options: [
                {
                    id: 1,
                    option: "Under ₹1,000"
                },
                {
                    id: 2,
                    option: "₹1,000 - ₹5,000"
                },
                {
                    id: 3,
                    option: "₹5,000 - ₹10,000"
                },
                {
                    id: 4,
                    option: "₹10,000 - ₹20,000"
                },
                {
                    id: 5,
                    option: "Over ₹20,000"
                },
            ]
        },
        {
            id: 6,
            title: "Deals",
            options: [
                {
                    id: 1,
                    option: "Today's Deals"
                }
            ]
        },
        {
            id: 7,
            title: "Discount",
            options: [
                {
                    id: 1,
                    option: "10% Off or more"
                },
                {
                    id: 2,
                    option: "25% Off or more"
                },
                {
                    id: 3,
                    option: "35% Off or more"
                },
                {
                    id: 4,
                    option: "50% Off or more"
                },
                {
                    id: 5,
                    option: "60% Off or more"
                },
                {
                    id: 6,
                    option: "70% Off or more"
                },
            ]
        },
        {
            id: 8,
            title: "Seller",
            options: [
                {
                    id: 1,
                    option: "Appario Retail Private Ltd"
                },
                {
                    id: 2,
                    option: "Cocoblu Retail"
                },
                {
                    id: 3,
                    option: "TheGiftKart"
                },
                {
                    id: 4,
                    option: "AMEZ"
                },
                {
                    id: 5,
                    option: "Spigen India"
                },
                {
                    id: 6,
                    option: "ImagineDesign"
                },
                {
                    id: 7,
                    option: "S.K Retail"
                },
                {
                    id: 8,
                    option: "ALL MARQUES STORE"
                },
            ]
        },
        {
            id: 9,
            title: "Availability",
            options: [
                {
                    id: 1,
                    option: "Include Out of Stock"
                }
            ]
        },
    ]
    return (
        <div className={styles.filter}>
            {filterArray.map((item) => <div key={item.id} className={styles.filterItem}>
                <p className={styles.filterTitle}>{item.title}</p>
                {
                    item.options.map((item) => <div key={item.id} className={styles.filterOptions}>


                        {item.option === 4 || item.option === 3 || item.option === 2 || item.option === 1 ?
                          
                            <AiFillStar className={styles.icon} />
                            :
                            <input type="checkbox" />
                        }

                        <span className={styles.filterOption}>{item.option}</span>   </div>)
                }

            </div>)}
        </div>
    )
}

export default Filter