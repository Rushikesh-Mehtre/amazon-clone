import React from 'react'
import styles from "./CheckOutDetailsPage.module.scss"
const CheckOutDetailsPage = () => {
    return (
        <div className={styles.checkOutDetailsPage}>
            <div className={styles.top}></div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.section}>
                        <p className={styles.head}>1 &nbsp;
                            Select a delivery address</p>
                        <div className={styles.content}>
                            <p>Most recently used</p>
                            <div>
                                <input type="radio" /> <label htmlFor="">Room No 18, 2nd Flr, Mandvi Chambers, 184, Samuel Street, Masjid Bunder(e),Mumbai,Maharashtra,Phone number - 02223443418</label>
                            </div>
                            <div>
                                <input type="radio" /> <label htmlFor="">107 Avanti Chambers R C Dutt Road, B/h Express Hotel R C Dutt Road,Mumbai,Maharashtra,Phone number - 02223443418</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <button>Place your order</button>
                    <p className={styles.rightTopText}>By placing your order, you agree to Amazon's privacy notice and conditions of use.</p>
                    <p className={styles.rightHead}>Order Summary</p>
                    <p className={styles.numbers}>
                        <span>Items:</span>
                        <span>₹2,761.00</span>
                    </p>
                    <p className={styles.numbers} >
                        <span>Delivery:	</span>
                        <span>₹0.00</span>
                    </p>
                    <p className={styles.numbers}>
                        <span>Order Total:</span>
                        <span>₹2,761.00
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