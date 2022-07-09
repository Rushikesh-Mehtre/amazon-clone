import React from 'react'
import styles from "./PageNotFound.module.scss"
import logo from "../../assets/images/amazon1.png"
import { Link } from 'react-router-dom';
import { GoTriangleRight } from 'react-icons/go';


const PageNotFound = () => {
    const qImgUrl = "https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/common/kailey-kitty._CB485935150_.gif"
    return (
        <div className={styles.pageNotFound}>
            <img src={logo} alt="" />
            <div className={styles.content}>
                <div className={styles.top}>
                    <img src={qImgUrl} alt="" />
                    <div>
                        <p>Looking for something?</p>
                        <p>We're sorry. The Web address you entered is not a functioning page on our site.</p>
                        <p><GoTriangleRight className={styles.icon} /> <span>Go to Amazon's <Link to="/">Home</Link> Page</span>  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound