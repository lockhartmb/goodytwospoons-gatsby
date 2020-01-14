import React from "react";
import styles from "./Divider.module.scss";

const Divider = ({ image }) => {
  return (
    <div>
      <img className={styles.dividerImage} src={image}></img>
    </div>
  );
};

export default Divider;
