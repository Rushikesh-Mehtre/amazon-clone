import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./SearchResultPage.module.scss";
const SearchResultPage = () => {
  const params = useParams();
  return (
    <div className={styles.searchResultPage}>
      <Header />
      <h1>Hey ! You looking for search result. Its in Progress ! </h1>
      <p>you are looking {params.keyword} </p>
    </div>
  );
};

export default SearchResultPage;
