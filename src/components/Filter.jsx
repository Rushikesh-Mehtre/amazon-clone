import React from 'react'
import styles from "../styles/Filter.module.scss";
import { AiFillStar } from "react-icons/ai";
import { filterArray } from "../data/ProductsList"
const Filter = () => {


    return (
        <div className={styles.filter}>
            {filterArray.map((item) => <div key={item.id} className={styles.filterItem}>
                <p className={styles.filterTitle}>{item.title}</p>
                {
                    item.options.map((item) => <div key={item.id} className={styles.filterOptions}>


                        {item.option === 4 || item.option === 3 || item.option === 2 || item.option === 1 ?

                            item.option === 4 ? <span>< AiFillStar className={styles.icon} />< AiFillStar className={styles.icon} />< AiFillStar className={styles.icon} />< AiFillStar className={styles.icon} /></span> : item.option === 3 ? <span>< AiFillStar className={styles.icon} />< AiFillStar className={styles.icon} />< AiFillStar className={styles.icon} /></span> : item.option === 2 ? <span>< AiFillStar className={styles.icon} />< AiFillStar className={styles.icon} /></span> : <span>< AiFillStar className={styles.icon} /></span>

                            :
                            <input type="checkbox" />
                        }

                        <span className={styles.filterOption}>{item.option === 4 || item.option === 3 || item.option === 2 || item.option === 1 ? "& Up" : item.option}</span>   </div>)
                }

            </div>)}
        </div>
    )
}

export default Filter