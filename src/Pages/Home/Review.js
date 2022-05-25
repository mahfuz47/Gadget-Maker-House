import React from "react";

const Review = ({ review }) => {
  const { name, opinion, img } = review;
  return (
    <div className="review-container col-md-3 col-sm-12 mx-3 text-center service-box p-0 h-100 lh-1">
      <img className="review-img" src={img} alt="" />
      <h5>
        <b>Name: </b>
        {name}
      </h5>
      <div className="px-1">
        <p>
          <b>Review: </b>
          {opinion}
        </p>
      </div>
    </div>
  );
};

export default Review;
