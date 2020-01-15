import React from "react";
import { Link } from "gatsby";
import styles from "./GoodiesSection.module.scss";

const GoodiesSection = ({ title, description }) => {
  return (
    <section className="section">
      <div className="wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="gallery">
          <div className="galleryitem">
            <img src="" alt="" />
            <h4>Cupcakes</h4>
          </div>
          <div className="galleryitem">
            <img src="" alt="" />
            <h4>Sweets</h4>
          </div>
          <div className="galleryitem">
            <img src="" alt="" />
            <h4>Special Occasions</h4>
          </div>
        </div>
        <Link to="/menu" className="buttonLink">
          View menu
        </Link>
      </div>
    </section>
  );
};

export default GoodiesSection;
