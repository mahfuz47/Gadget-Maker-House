import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
