import React from "react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpeg";

//
// Import Swiper styles
//
import "swiper/css";

const Banner = () => {
  const navigate = useNavigate();
  const bannerImages = [
    {
      img: banner1,
    },
    {
      img: banner2,
    },
    {
      img: banner3,
    },
    {
      img: banner4,
    },
  ];

  const features = [
    {
      title: "Sustainable",
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Fast Delivery",
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      ),
    },
    {
      title: "Huge Stock",
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      ),
    },
    {
      title: "Dealership",
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="my-5">
      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div className="text-center md:text-left">
            <div className="mb-8">
              <h3 className="lg:text-3xl text-xl font-bold">Welcome to</h3>
              <h1 className="text-indigo-600 font-bold text-3xl lg:text-4xl">
                Gadget Maker House
              </h1>
              <p className=" lg:text-lg text-sm mt-4 text-slate-700">
                One of the largest manufacturing company in Asia
              </p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
              {features.map(({ title, icons }) => (
                <div
                  key={title}
                  className="bg-indigo-600 text-white p-5 flex flex-col items-center hover:bg-indigo-400 justify-between text-center rounded-md gap-3"
                >
                  <span>{icons}</span>
                  <h1>{title}</h1>
                </div>
              ))}
            </div>
            <div>
              <button
                onClick={() => navigate("/allTools")}
                className="btn bg-slate-700 border-none rounded  w-1/3 font-bold mt-6 hover:bg-indigo-800 text-white hover:text-white"
              >
                Get Started
              </button>
            </div>
          </div>
          <div>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="rounded-md"
            >
              {bannerImages.map(({ img }) => (
                <SwiperSlide key={img} className="bg-slate-600">
                  <img
                    src={img}
                    className="object-cover md:h-[350px] h-[250px] w-full"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
