import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title> {title} | Gadget Maker House</title>
      </Helmet>
    </div>
  );
};

export default Title;
