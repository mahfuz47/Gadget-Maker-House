import React, { useState } from "react";

const Review = ({ review }) => {
  const { name, passion, opinion, img, ratings } = review;
  const [more, setMore] = useState(false);
  return (
    <div className="w-full h-auto ">
      <img
        className="h-[150px] w-full object-cover rounded-lg"
        src={img}
        alt=""
      />
      <div className="">
        <h5 className="font-bold text-lg mb-2">{name}</h5>
        <h5 className="font-bold text-sm px-3 mb-2 bg-indigo-600 text-white w-fit rounded">
          {passion}
        </h5>
        <blockquote className="text-slate-600 flex-wrap">
          {!more ? (
            <span>{opinion?.slice(0, 30) + "..."} </span>
          ) : (
            <span>{opinion}</span>
          )}
          <span>
            {" "}
            {opinion?.length > 30 && (
              <button
                onClick={() => setMore(!more)}
                className="btn-link no-underline hover:no-underline text-indigo-600 font-bold"
              >
                {more ? "less" : "more"}
              </button>
            )}
          </span>
        </blockquote>
        <h3 className="font-bold text-orange-400">Rating: {ratings}/5</h3>
      </div>
    </div>
  );
};

export default Review;
