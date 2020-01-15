import React from "react";
import { Link } from "gatsby";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Header = ({ heading, subheading }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "hero" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const src = data.allFile.edges[0].node.childImageSharp.fluid;
  return (
    <BackgroundImage fluid={src} fadeIn={true}>
      <header className={styles.header}>
        <div className="wrapper">
          <Navbar />
          <div className={styles.headerContent}>
            <h1>{heading}</h1>
            <h2>{subheading}</h2>
            <Link to="/gallery" className="buttonLink">
              Gallery
            </Link>
          </div>
        </div>
      </header>
    </BackgroundImage>
  );
};

export default Header;
