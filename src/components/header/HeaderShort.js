import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./Header.module.scss";
import BackgroundImage from "gatsby-background-image";
import Navbar from "../navbar/Navbar";

const HeaderShort = () => {
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
      <header className={styles.headerShort}>
        <div className="wrapper">
          <Navbar />
        </div>
      </header>
    </BackgroundImage>
  );
};

export default HeaderShort;
