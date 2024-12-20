import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import Banner from "../../../../images/banner 1.jpg";
import Banner1 from "../../../../images/blogs-mob.png";
import Banner2 from "../Image/Blog8.png";
import Banner3 from "../../../Projects/Eligent/ElegantImages/full-change.png";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f9f9f9;

  }
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-wrap: wrap;
`;

const MainContent = styled.main`
  flex: 3;
  min-width: 300px;
  padding-right: 2rem;
`;

const Sidebar = styled.aside`
  flex: 1;
  min-width: 250px;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-family: "Merriweather", serif;
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 3px;
    background-color: #3498db;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  text-align: justify;
`;

const List = styled.ul`
  font-family: "Open Sans", serif;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  position: relative;
`;

const TableOfContents = styled.nav`
  background-color: #e3e0e0;
  padding: 1.5rem;
  border-radius: 8px;
  position: sticky;
  top: 2rem;
`;

const TOCTitle = styled.h4`
  font-family: "Merriweather", serif;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const TOCList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TOCItem = styled.li`
  margin-bottom: 0.5rem;

  a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }
  }
`;

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #3498db;
  transform-origin: 0%;
`;

const EighthBlog = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Managed Farmland Near Chikkaballapur | Blog</title>
        <meta
          name="description"
          content="Discover managed farmland near Chikkaballapur with eco-friendly practices that enhance soil health and ensure long-term profitability."
        />
        <meta
          name="keywords"
          content="Sustainable farmland, Farmland management, Eco-friendly practices, Soil health, Agricultural benefits"
        />
        <meta name="author" content="Groavy Team" />
        <meta
          property="og:title"
          content="Exploring the Benefits of Sustainable Farmland Management"
        />
        <meta
          property="og:description"
          content="Discover managed farmland near Chikkaballapur with eco-friendly practices that enhance soil health and ensure long-term profitability."
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta
          property="og:url"
          content="https://www.groavy.com/blogs/managed-farmland-near-chikkaballapur/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GroavyBuildcon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Exploring the Benefits of Sustainable Farmland Management"
        />
        <meta
          name="twitter:description"
          content="Discover managed farmland near Chikkaballapur with eco-friendly practices that enhance soil health and ensure long-term profitability."
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="canonical"
          href="https://www.groavy.com/blogs/managed-farmland-near-chikkaballapur/"
        />
      </Helmet>

      <div>
        <div className="position-relative">
          <picture className="w-100">
            <source srcSet={Banner1} media="(max-width: 699px)" />
            <img
              src={Banner}
              alt="Sustainable Farmland Management"
              width={"100%"}
              height={"auto"}
              className="w-100"
            />
          </picture>

          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 id="head" className="text-white text-center">
              <FontAwesomeIcon
                icon={faLeaf}
                className="icon-before animated-icon"
              />
              Exploring the Benefits
              <br />
              of Sustainable Managed Farmland
              <FontAwesomeIcon
                icon={faLeaf}
                className="icon-after animated-icon"
              />
            </h1>
          </div>
        </div>
      </div>

      <GlobalStyle />
      <ProgressBar style={{ transform: `scaleX(${scrollProgress})` }} />

      <BlogContainer className="mt-5">
        <Content>
          <MainContent className="para-color">
            <Section>
              <Paragraph>
                Sustainable managed farmland is revolutionizing agriculture by
                incorporating eco-friendly practices that ensure long-term
                productivity and soil health. As concerns about climate change
                grow, farmers and investors are adopting sustainable methods to
                protect the land and increase yields. Projects like Elegant
                Orchards Estate near Chikkaballapur demonstrate the value of
                managed farmland, utilizing organic farming, resource
                conservation, and modern techniques to create a profitable and
                environmentally responsible future for agriculture.
              </Paragraph>
            </Section>

            <picture className="w-100">
              <source srcSet={Banner2} media="(max-width: 699px)" />
              <img
                src={Banner3}
                alt="Sustainable Farmland Techniques"
                width={"100%"}
                height={"auto"}
                className="w-100"
              />
            </picture>

            <Section className="mt-5">
              <SectionTitle id="Why-Sustainable-Farmland-Matters">
                Why Managed Farmland is Essential
              </SectionTitle>
              <Paragraph>
                Managed farmland plays a crucial role in addressing pressing
                agricultural challenges, such as environmental impact, soil
                health, and resource management. With the world’s population
                expanding and the demand for food increasing, effective
                management of farmland becomes vital. Managed farmland practices
                not only enhance soil fertility and promote sustainable water
                use but also ensure the long-term productivity of agricultural
                lands. By adopting these practices, we can achieve a resilient
                and efficient agricultural system that supports both
                environmental and economic sustainability.
              </Paragraph>
            </Section>

            <Section className="mt-5">
              <SectionTitle id="Key-Sustainable-Practices">
                Key Sustainable Practices
              </SectionTitle>
              <Paragraph>
                There are several key practices that define sustainable farmland
                management:
              </Paragraph>
              <List>
                <ListItem>
                  <strong>Organic Farmland Management:</strong> Avoids synthetic
                  chemicals and promotes the use of organic fertilizers and
                  natural pest control methods. This practice enhances soil
                  fertility and supports biodiversity.
                </ListItem>
                <ListItem>
                  <strong>Crop Rotation:</strong> Involves alternating crops
                  each season to improve soil health and reduce pest and disease
                  pressure.
                </ListItem>
                <ListItem>
                  <strong>Conservation Tillage:</strong> Reduces soil erosion
                  and maintains soil structure by minimizing tillage and leaving
                  crop residues on the field.
                </ListItem>
                <ListItem>
                  <strong>Water Management:</strong> Employs techniques such as
                  drip irrigation and rainwater harvesting to use water more
                  efficiently and sustainably.
                </ListItem>
              </List>
            </Section>

            <Section className="mt-5">
              <SectionTitle id="Benefits-of-Sustainable-Farmland">
                Benefits of Sustainable Farmland Management
              </SectionTitle>
              <Paragraph>
                Adopting sustainable farmland management practices offers
                numerous benefits:
              </Paragraph>
              <List>
                <ListItem>
                  <strong>Enhanced Soil Health:</strong> Sustainable methods
                  improve soil structure, fertility, and organic matter content,
                  leading to better crop yields and reduced dependency on
                  synthetic inputs.
                </ListItem>
                <ListItem>
                  <strong>Environmental Protection:</strong> Reduces pollution,
                  conserves water, and promotes biodiversity by minimizing
                  harmful practices and enhancing ecosystem health.
                </ListItem>
                <ListItem>
                  <strong>Economic Viability:</strong> Sustainable practices can
                  lead to cost savings through reduced input use and improved
                  long-term productivity, providing a stable return on
                  investment.
                </ListItem>
              </List>
            </Section>

            <Section className="mt-5">
              <SectionTitle id="Groavy-Buildcon-and-Sustainable-Farmland">
                Groavy Buildcon and Sustainable Farmland Management
              </SectionTitle>
              <Paragraph>
                At <Link to="/">Groavy Buildcon </Link> , we are committed to
                promoting sustainable farmland management through our innovative
                projects. Our Elegant Orchards Estate in Peresandra,
                Chikkaballapur, is a prime example of integrating sustainable
                practices with modern farmland techniques. By investing in such
                projects, you contribute to a greener future while benefiting
                from a profitable and sustainable investment.
              </Paragraph>
            </Section>

            <Section className="mt-5">
              <SectionTitle id="Why-Choose-Elegant-Orchards">
                Why Choose Elegant Orchards Estate?
              </SectionTitle>
              <Paragraph>
                Investing in Elegant Orchards Estate offers several advantages:
              </Paragraph>
              <List>
                <ListItem>
                  <strong>Prime Location:</strong> Located near Bangalore with
                  access to fertile soil and favorable climatic conditions.
                </ListItem>
                <ListItem>
                  <strong>Commitment to Sustainability:</strong> Employs organic
                  and conservation practices to enhance soil health and
                  environmental stewardship.
                </ListItem>
                <ListItem>
                  <strong>Potential for Returns:</strong> Promising returns as
                  demand for sustainably produced food increases.
                </ListItem>
                <ListItem>
                  <strong>Community Support:</strong> Join a community dedicated
                  to sustainable farmland management with ongoing support from
                  Groavy Buildcon.
                </ListItem>
              </List>
            </Section>

            <Section>
              <SectionTitle id="Conclusion">Conclusion</SectionTitle>
              <Paragraph>
                Sustainable farmland management is crucial for the future of
                agriculture. By investing in projects like{" "}
                <Link to="/elegantorchards">Elegant Orchards Estate,</Link> you
                not only support eco-friendly practices but also secure a
                valuable asset. Embrace the opportunity to contribute to
                sustainable development and reap the rewards of a well-managed
                farmland investment.
              </Paragraph>
            </Section>
          </MainContent>

          <Sidebar>
            <TableOfContents>
              <TOCTitle>Table of Contents</TOCTitle>
              <TOCList>
                <TOCItem>
                  <a href="#Why-Sustainable-Farmland-Matters">
                    Why Managed Farmland is Essential
                  </a>
                </TOCItem>
                <TOCItem>
                  <a href="#Key-Sustainable-Practices">
                    Key Sustainable Practices
                  </a>
                </TOCItem>
                <TOCItem>
                  <a href="#Benefits-of-Sustainable-Farmland">
                    Benefits of Sustainable Farmland Management
                  </a>
                </TOCItem>
                <TOCItem>
                  <a href="#Groavy-Buildcon-and-Sustainable-Farmland">
                    Groavy Buildcon and Sustainable Farmland Management
                  </a>
                </TOCItem>
                <TOCItem>
                  <a href="#Why-Choose-Elegant-Orchards">
                    Why Choose Elegant Orchards Estate?
                  </a>
                </TOCItem>
                <TOCItem>
                  <a href="#Conclusion">Conclusion</a>
                </TOCItem>
              </TOCList>
            </TableOfContents>
          </Sidebar>
        </Content>
      </BlogContainer>
    </>
  );
};

export default EighthBlog;
