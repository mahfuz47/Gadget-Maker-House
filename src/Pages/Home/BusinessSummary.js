import React from "react";

const BusinessSummary = () => {
  const businessSummary = [
    {
      id: 1,
      title: "Membership",
      description: "We have awesome membership all over the world",
      value: "500k+",
    },
    {
      id: 2,
      title: "Projects",
      description: "We have done awesome projects",
      value: "1.5M",
    },
    {
      id: 3,
      title: "Most Liked",
      description: "We have awesome membership all over the world",
      value: "1M",
    },
    {
      id: 4,
      title: "Countries",
      description: "We deliver our services all over the world",
      value: "26+",
    },
  ];

  return (
    <div className="h-full my-10 rounded-xl p-5">
      <h1 className="text-center text-4xl font-bold my-8">Business Summary</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-3 py-3">
        {businessSummary.map(({ title, description, value, id }) => (
          <div
            key={id}
            className="bg-white p-3 rounded-md text-center gap-2 grid shadow-md"
          >
            <h1 className="text-2xl font-bold ">{title}</h1>
            <h1 className="font-black text-3xl text-indigo-600">{value}</h1>
            <span className="text-sm text-slate-400">{description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessSummary;
