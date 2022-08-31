import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./SearchResultPage.module.scss";
import primeChecked from "../../assets/images/checked_prime.png";
import { AiFillStar } from "react-icons/ai";
import AllProductsList from "../../data/AllProductsList";
import AdList from "../../data/AdList"
import Filter from "../../components/Filter";
const SearchResultPage = () => {
  console.log(AllProductsList, AdList)
  const params = useParams();
  const resultItems = AllProductsList.filter((item) => item.keyword.includes(params.keyword));
  console.log("resultItems", resultItems)
  const adArray = AdList.filter((item) => item.keywords.includes(params.keyword))
  console.log("adArray", adArray)
  const navigate = useNavigate();
  const showItemHandler = (item) => {
    navigate("/itemdetials", { state: item })
  }
  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <div className={styles.searchResultPage}>
      <Header />
      {resultItems.length > 0 ?
        <>
          <p className={styles.NumOfResults}>{resultItems.length} results for <span>"{params.keyword}"</span>
          </p>
          <div className={styles.searchItems}>
            <div className={styles.filter}><Filter /> </div>
            <div className={styles.content}>
              {adArray.length > 0 && <div className={styles.ad}>
                {adArray.map((item) => <div className={styles.adItem}>
                  <div className={styles.top}>
                    <img src={item.titleImgUrl} alt="" />
                    <p>{item.title}</p>
                  </div>
                  <div className={styles.adBlocks}>
                    <img src={item.mainImgUrl} className={styles.mainImg} alt="" srcset="" />
                    {
                      item.content.map((item) => <div className={styles.adBlock}>
                        <img src={item.imgUrl} alt="" />
                        <p>{item.title}</p>
                      </div>)
                    }
                  </div>
                </div>)}
              </div>}
              <p className={styles.resultHead}>RESULTS</p>
              <div className={styles.list}>
                {
                  resultItems.map((item) =>
                    <div className={styles.searchItem} >
                      <div className={styles.imgContainer} onClick={() => { showItemHandler(item) }}>
                        <img src={item.imgUrl} className={styles.img} alt="" />
                      </div>
                      <div className={styles.searchItemDetails}>
                        <p className={styles.title}>{item.title}</p>
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
                        <p className={styles.price}>₹{item.price}</p>

                        <p className={styles.saveExtra}>Save extra with No Cost EMI</p>
                        <p className={styles.primeDelivery}> <img src={primeChecked} alt="" srcset="" />FREE Delivery by Monday  </p>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>

          </div>
        </> : <div className={styles.noResults}>
          <p>No results found for <strong>"{params.keyword}"</strong>  </p>
          <p>Try checking your spelling or use more general terms.
          </p>
          <p>Go back to <Link to="/">Home</Link> </p>
        </div>}

    </div>
  );
};

export default SearchResultPage;
