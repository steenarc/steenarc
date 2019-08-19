import React from "react";

import Layout from "components/layouts/layout";
import SEO from "components/common/seo";
import HeroBanner from "components/pages/home/herobanner";
import HowWeWorks from "components/pages/home/how-we-works";
import YouWillGets from "components/pages/home/you-will-gets";
import Pricing from "components/pages/home/pricing";
import FAQs from "components/pages/home/faqs";

import "./style.scss";

const Home = () => (
  <Layout>
    <SEO title="Steenify" />
    <main className="home__page steenify__page">
      <HeroBanner />
      <HowWeWorks />
      <YouWillGets />
      <Pricing />
      <FAQs />
    </main>
  </Layout>
);

export default Home;
