import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useReviews from "../../Hooks/useReviews";
import Review from "./Review";
import "swiper/css";
import quote from "../../images/quote.svg";

const Reviews = () => {
  const [reviews] = useReviews();
  console.log(reviews);
  return (
    <>
      <div className="flex justify-end">
        <img src={quote} className="w-24 lg:w-48" alt="" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-start mb-10">Clients Says</h2>
      </div>

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
              <Review key={review._id} review={review}></Review>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
