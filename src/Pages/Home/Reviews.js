import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useReviews from "../../Hooks/useReviews";
import Review from "./Review";
import "swiper/css";

const Reviews = () => {
  const [reviews] = useReviews();
  console.log(reviews);
  return (
    <>
      <h1 className="text-center mb-10 font-bold text-4xl">Client Says</h1>
      <div>
        <Swiper
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[380px] "
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <Review key={review.id} review={review}></Review>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
