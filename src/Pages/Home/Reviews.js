import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useReviews from "../../Hooks/useReviews";
import quote from "../../images/quote.svg";
import Review from "./Review";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <>
      <div className="flex justify-end">
        <img src={quote} className="w-24 lg:w-48" alt="" />
      </div>
      <div className="p-5">
        <h2 className="lg:text-4xl text-2xl font-bold text-start">
          Clients Says
        </h2>
      </div>

      <div className="px-4 lg:hidden flex">
        <Swiper
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={15}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[380px]"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <Review key={review._id} review={review}></Review>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="px-4 hidden lg:flex">
        <Swiper
          slidesPerView={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={15}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[380px]"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <Review key={review._id} review={review}></Review>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
