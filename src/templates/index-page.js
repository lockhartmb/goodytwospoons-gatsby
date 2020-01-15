import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/header/Header";
import GoodiesSection from "../components/goodiessection/GoodiesSection";
import AboutSection from "../components/aboutsection/AboutSection";
import TestimonialsSection from "../components/testimonialssection/TestimonialsSection";
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
  return (
    <>
      <Header heading={heading} subheading={subheading} />
      <main>
        <GoodiesSection
          title="Goodies That I Do"
          description="Description of goodies"
        />
        <Divider />
        <AboutSection title="About me" description="description of about me" />
        <Divider />
        <TestimonialsSection
          title="What people are saying"
          description="testimonials description"
        />
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
