import React from "react";
import styles from "../styles/Footer.module.scss";
import amazon from "../assets/images/amazon.png";
const Footer = () => {
  const countriesList = [
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "Poland",
    "Singapore",
    "Spain",
    "Turkey",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
  ];
  const knowUsList = [
    "About Us",
    "Careers",
    "Press Releases",
    "Amazon Cares",
    "Gift a Smile",
    "Amazon Science",
  ];
  const makeMoneyWithUslist = [
    "Sell on Amazon",
    "Sell under Amazon Accelerator",
    "Amazon Global Selling",
    "Become an Affiliate",
    "Fulfilment by Amazon",
    "Advertise Your Products",
    "Amazon Pay on Merchants",
  ];
  const letUsHelpYouList = [
    "COVID-19 and Amazon",
    "Your Account",
    "Returns Centre",
    "100% Purchase Protection",
    "Amazon App Download",
    "Amazon Assistant Download",
    "Help",
  ];
  const connectUsList = ["Facebook", "Twitter", "Instagram"];
  const languagesList = [
    "English",
    "Hindi",
    "Marathi",
    "Telugu",
    "Tamil",
    "Malyalam",
    "Kannada",
  ];
  const otherServicesList = [
    {
      id: "1",
      head: "AbeBooks",
      subhead1: "Books  art",
      subhead2: "& collectibles",
    },
    {
      id: "2",
      head: "Amazon Web Services",
      subhead1: "Scalable Cloud",
      subhead2: "Computing Services",
    },
    {
      id: "3",
      head: "Audible",
      subhead1: "Download",
      subhead2: "Audio Books",
    },
    {
      id: "4",
      head: "DPReview",
      subhead1: "Digital",
      subhead2: "Photography",
    },
    {
      id: "5",
      head: "IMDb",
      subhead1: "Movies, TV",
      subhead2: "& Celebrities",
    },
    {
      id: "6",
      head: "Shopbop",
      subhead1: "Designer",
      subhead2: "Fashion Brands",
    },
    {
      id: "7",
      head: "Amazon Business",
      subhead1: "Everything For",
      subhead2: "Your Business",
    },
    {
      id: "8",
      head: "Prime Now",
      subhead1: " 2-Hour Delivery",
      subhead2: "on Everyday Items",
    },
    {
      id: "9",
      head: "Amazon Prime Music",
      subhead1: "90 million songs, ad-free",
      subhead2: "Over 15 million podcast episodes ",
    },
  ];
  const copyRightsList = [
    "Conditions of Use & Sale",
    "Privacy Notice",
    "Interest-Based Ads",
    "© 1996-2022, Amazon.com, Inc. or its affiliates",
  ];
  const backtoTopHandler = () => {
    window.scroll(0, 0);
  };
  return (
    <div className={styles.footer}>
      <p className={styles.scrollToTopText} onClick={backtoTopHandler}>
        Back top
      </p>
      <div className={styles.links}>
        <div className={styles.linksColumn}>
          <p className={styles.linksColumnHead}>Get to Know Us</p>
          {knowUsList.map((item) => {
            return (
              <p key={item} className={styles.link}>
                {item}
              </p>
            );
          })}
        </div>
        <div className={styles.linksColumn}>
          <p className={styles.linksColumnHead}>Connect with Us</p>
          {connectUsList.map((item) => {
            return (
              <p key={item} className={styles.link}>
                {item}
              </p>
            );
          })}
        </div>
        <div className={styles.linksColumn}>
          <p className={styles.linksColumnHead}>Make Money with Us</p>
          {makeMoneyWithUslist.map((item) => {
            return (
              <p key={item} className={styles.link}>
                {item}
              </p>
            );
          })}
        </div>
        <div className={styles.linksColumn}>
          <p className={styles.linksColumnHead}>Let Us Help You</p>
          {letUsHelpYouList.map((item) => {
            return (
              <p key={item} className={styles.link}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className={styles.countries}>
        <div className={styles.head}>
          <img src={amazon} alt="" />
          <select name="" id="">
            {languagesList.map((item) => {
              return (
                <option value={item} className={styles.langOption} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.countriesList}>
          {countriesList.map((item) => {
            return (
              <span key={item} className={styles.countryName}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.others}>
        <div className={styles.otherServices}>
          {otherServicesList.map((item) => {
            return (
              <div key={item.id} className={styles.otherServicesItem}>
                <p className={styles.head}>{item.head}</p>
                <p className={styles.subhead}>{item.subhead1}</p>
                <p className={styles.subhead}>{item.subhead2}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.copyRights}>
          {copyRightsList.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
