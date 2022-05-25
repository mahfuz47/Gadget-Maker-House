import React from "react";
import useReviews from "../../Hooks/useReviews";
import Review from "./Review";

const Reviews = () => {
  const [reviews] = useReviews();
  console.log(reviews);
  return (
    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 gap-y-8">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
