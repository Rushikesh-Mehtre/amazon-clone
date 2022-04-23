import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/BottomLine.module.scss";
const BottomLine = () => {
  return (
    <div className={styles.bottomLine}>
      <div className={styles.bottom}>
        <p className={styles.links}>
          <Link to="#">Conditions of use</Link>
          <Link to="#">Privacy Notice</Link>
          <Link to="#">Help</Link>
        </p>
        <p className={styles.copyRight}>
          © 1996-2022, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default BottomLine;
