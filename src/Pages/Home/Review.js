import React from "react";

const Review = ({ review }) => {
  const { name, passion, opinion, img } = review;
  return (
    <div className="flex flex-col items-center justify-between bg-white p-5 rounded-md shadow-md min-h-[350px] gap-3">
      <img
        className="h-[150px] w-full object-cover rounded-lg"
        src={img}
        alt=""
      />
      <div className="">
        <h5 className="font-bold text-xl mb-2">{name}</h5>
        <h5 className="font-bold text-sm px-3 mb-2 bg-indigo-600 text-white w-fit rounded">
          {passion}
        </h5>
        <blockquote className="text-slate-600">{opinion}</blockquote>
      </div>
    </div>
  );
};

export default Review;
