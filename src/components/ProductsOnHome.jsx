import React from 'react'
import Product from "./Product";
import styles from "../styles/ProductsOnHome.module.scss"
import { productList5, productList6, productList7 } from '../data/ProductsList';
const ProductsOnHome = () => {
    return (
        <div className={styles.productsOnHome}>
            <div className={styles.home_Row}>
                {productList5.map((item) => {
                    return (
                        <Product
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            image={item.imgUrl}
                        />
                    );
                })}
            </div>
            <div className={styles.home_Row}>
                {productList6.map((item) => {
                    return (
                        <Product
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            image={item.imgUrl}
                        />
                    );
                })}
            </div>
            <div className={styles.home_Row}>
                {productList7.map((item) => {
                    return (
                        <Product
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            image={item.imgUrl}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default ProductsOnHome