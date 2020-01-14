import React from "react";
import { graphql } from "gatsby";
import pinkCupcake from "../img/pinkCupcake.jpg";
import lemonCupcake from "../img/lemonCupcake.jpg";
import Layout from "../components/Layout";
import Header from "../components/header/Header";
import GoodiesSection from "../components/goodiessection/GoodiesSection";
import Divider from "../components/divider/Divider";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  goodiesTitle,
  goodiesDescription,
  goodiesGallery
}) => {
  console.log(goodiesGallery);
  return (
    <>
      <Header heading={heading} subheading={subheading} />
      <main>
        <GoodiesSection
          goodiesTitle={goodiesTitle}
          description={goodiesDescription}
        />
        <Divider image={pinkCupcake} />
        {/* <Section title="About me" /> */}
        <Divider image={lemonCupcake} />
        {/* <Section title="What people are saying" /> */}
      </main>
    </>
  );
};

IndexPageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // title: PropTypes.string,
  // heading: PropTypes.string,
  // subheading: PropTypes.string,
  // mainpitch: PropTypes.object,
  // description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array
  // })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        goodiesTitle={frontmatter.goodiesTitle}
        goodiesDescription={frontmatter.goodiesDescription}
        goodiesGallery={frontmatter.goodiesGallery}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  // data: PropTypes.shape({
  //   markdownRemark: PropTypes.shape({
  //     frontmatter: PropTypes.object
  //   })
  // })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`;
