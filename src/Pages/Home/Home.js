import React from "react";
import Title from "../../Utilities/Title";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Dealership from "./Dealership";
import Features from "./Features";

import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Title title="Home"></Title>
      <Banner></Banner>
      <Tools></Tools>
      <Reviews></Reviews>
      <Dealership></Dealership>
      <Features></Features>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;
