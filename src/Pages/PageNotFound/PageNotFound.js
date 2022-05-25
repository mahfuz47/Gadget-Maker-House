import React from "react";
import Title from "../../Utilities/Title";

const PageNotFound = () => {
  return (
    <div>
      <Title title={"Error"}></Title>
      <img className="w-full" src={require("./error-image.jpg")} alt="" />
    </div>
  );
};

export default PageNotFound;
