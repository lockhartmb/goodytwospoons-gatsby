import React from "react";
import styles from "./GoodieItem.module.scss";

const GoodieItem = ({ caption }) => {
  return (
    <div className={styles.goodieItem}>
      <div className={styles.image}></div>
      <h4>{caption}</h4>
    </div>
  );
};
export default GoodieItem;
