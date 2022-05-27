import React from "react";
import Title from "../../Utilities/Title";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Dealership from "./Dealership";

import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Title title="Home"></Title>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Dealership></Dealership>
    </div>
  );
};

export default Home;
