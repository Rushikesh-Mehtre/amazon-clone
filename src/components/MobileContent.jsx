import React from "react";
import styles from "../styles/MobileContent.module.scss";
import {
  AiFillHeart,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
const MobileContent = () => {
  return (
    <div className={styles.mobileContent}>
      <div className={styles.top}>
        <div>
          <p>
            The amazon clone application is available in web version as of now.{" "}
          </p>

          <div className={styles.socialIcons}>
            <p>You can reach me out here.</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/rushikesh-mehtre-122a81217/"
            >
              <AiFillLinkedin className={styles.icon} /> rushikesh-mehtre
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/rs_mehtre/"
            >
              <AiFillInstagram className={styles.icon} /> rs_mehtre
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:rsmrsm5952@gmail.com"
            >
              <AiOutlineMail className={styles.icon} /> rsmrsm5952@gmail.com
            </a>
            <a target="_blank" rel="noreferrer" href="tel:7303133973">
              <AiOutlineWhatsApp className={styles.icon} /> 7303133973
            </a>
          </div>
        </div>

        <p>
          {" "}
          <AiFillHeart className={styles.icon} /> Thanks | Rushikesh{" "}
        </p>
      </div>
    </div>
  );
};

export default MobileContent;
