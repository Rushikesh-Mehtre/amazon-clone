import React, { useState } from 'react'
import styles from "./CheckOutDetailsPage.module.scss"
import { CartItemsContext } from "../../context/CartItemsContext";
import { useContext } from 'react';
import primeLogo from "../../assets/images/checked_prime.png";
import { AiOutlineLock } from 'react-icons/ai';
import amazonLogo from "../../assets/images/amazon1.png"

const CheckOutDetailsPage = () => {
    const { items } = useContext(CartItemsContext);
    const [address, setAddress] = useState("");
    const addressHandler = (value) => {
        setAddress(value);
    }
    const [paymentMethod, setPaymentMethod] = useState("")
    const paymentHandler = (value) => {
        setPaymentMethod(value);
    }
    let subtotal = items.reduce((accumulator, object) => {
        return Number(accumulator) + Number(object.price);
    }, 0);
    return (
        <div className={styles.checkOutDetailsPage}>
            <div className={styles.top}>
                <img src={amazonLogo} alt="" />
                <p className={styles.checkout}>Checkout</p>
                <p className={styles.Icon}><AiOutlineLock className={styles.lockIcon} /></p>
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.section}>
                        <p className={styles.head}>1 &nbsp;
                            Select a delivery address</p>
                        <div className={styles.content}>
                            <p className={styles.contentHead}>Most recently used</p>
                            <div className={address === "address1" ? styles.selected : ""}>
                                <input type="radio" checked={address === "address1"} name="address" value="address1" onClick={(e) => addressHandler(e.target.value)} /> <label htmlFor="">Room No 18, 2nd Flr, Mandvi Chambers, 184, Samuel Street, Masjid Bunder(e),Mumbai,Maharashtra,Phone number - 02223443418</label>
                            </div>
                            <div className={address === "address2" ? styles.selected : ""}>
                                <input type="radio" checked={address === "address2"} name="address" value="address2" onClick={(e) => addressHandler(e.target.value)} /> <label htmlFor="">107 Avanti Chambers R C Dutt Road, B/h Express Hotel R C Dutt Road,Mumbai,Maharashtra,Phone number - 02223443418</label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <p className={styles.head}>2 &nbsp;

                            Payment method</p>
                        <div className={styles.content}>
                            <p className={styles.contentHead}>Most recently used</p>
                            <div className={paymentMethod === "COD" ? styles.selected : ""}>
                                <input type="radio" name="paymentMethod" onClick={(e) => paymentHandler(e.target.value)} value="COD" /> <label htmlFor="">Cash on delivery (COD)</label>
                            </div>
                            <div className={paymentMethod === "netBanking" ? styles.selected : ""}>
                                <input type="radio" name="paymentMethod" onClick={(e) => paymentHandler(e.target.value)} value="netBanking" /> <label htmlFor="">Net banking</label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <p className={styles.head}>3 &nbsp;


                            Items and delivery</p>
                        <div className={styles.content}>
                            <p className={styles.contentHead}>Delivery date: <span className={styles.date}>7 July 2022</span> </p>
                            <p>If you order in the next 20 hours and 21 minutes ( Details )
                            </p>
                            <p>Items dispatched by Amazon
                            </p>
                            {
                                items.map((item) =>
                                    <div key={item.id} className={styles.items}>
                                        <img src={item.img || item.image} alt="" />
                                        <div className={styles.itemDetails}>
                                            <p> <strong>{item.title}</strong> </p>
                                            <p className={styles.price}>₹{item.price} <img src={primeLogo} className={styles.checkedPrime} alt="" /> </p>
                                            <select name="" id="">
                                                <option value="">Qty :1</option>
                                            </select>
                                            <p>Sold by : Amazon India</p>
                                        </div>
                                        <div className={styles.deliveryDetails}>
                                            <p> <strong>Choose a delivery option:</strong>
                                            </p>
                                            <p>
                                                <input type="radio" checked />
                                                <span> <span className={styles.day}>Thursday</span>   — FREE Delivery with Prime</span>
                                            </p>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <button>Place your order</button>
                    <p className={styles.rightTopText}>By placing your order, you agree to Amazon's privacy notice and conditions of use.</p>
                    <p className={styles.rightHead}>Order Summary</p>
                    <p className={styles.numbers}>
                        <span>Items:</span>
                        <span>₹{subtotal}</span>
                    </p>
                    <p className={styles.numbers} >
                        <span>Delivery:	</span>
                        <span>₹0.00</span>
                    </p>
                    <p className={styles.numbers}>
                        <span>Order Total:</span>
                        <span>₹{subtotal}
                        </span>
                    </p>
                    <div className={styles.bottomText}>
                        <p>How are delivery costs calculated?</p>
                        <p>Amazon Prime Delivery has been applied to the eligible items in your order.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckOutDetailsPage