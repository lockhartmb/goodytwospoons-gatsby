import React from "react";
import styles from "./Section.module.scss";

const Section = ({ title }) => {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <h3>{title}</h3>
        <p>this is a section</p>
      </div>
    </section>
  );
};

export default Section;
