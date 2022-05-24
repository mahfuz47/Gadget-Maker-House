import React from "react";
import { useNavigate } from "react-router-dom";
import useTools from "../../Hooks/useTools";

const Tools = () => {
  const [tools] = useTools();
  const navigate = useNavigate();
  const navigateToPartsDetails = (id) => {
    navigate(`/tools/${id}`);
  };
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-10 lg:py-10 lg:max-w-none">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center my-5 font-serif">
            Highlight Gadgets
          </h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 gap-y-8">
            {tools.map((tool) => (
              <div key={tool._id} className="group relative">
                <div className="relative w-full h-full shadow-lg bg-white rounded-lg overflow-hidden group-hover:scale-105 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={tool?.toolImage}
                    alt={tool?.toolName}
                    className="w-full h-full object-center object-cover"
                    title={tool?.toolName}
                  />
                </div>
                <div className="flex items-center justify-between px-4">
                  <h3 className="mt-6 text-xl font-bold font-sans text-slate-900">
                    <a href="/tools/:id">{tool?.toolName}</a>
                  </h3>
                  <div>
                    <button
                      onClick={() => {
                        navigateToPartsDetails(tool._id);
                      }}
                      className="btn bg-indigo-600 rounded-xl px-3 py-1 font-bold mt-6 uppercase hover:bg-indigo-800 text-white hover:text-black"
                    >
                      purchase
                    </button>
                  </div>
                </div>
                <div className="px-4">
                  <p>
                    <small>
                      {tool.description.length > 80
                        ? tool.description.slice(0, 100) + "......"
                        : ""}
                    </small>
                  </p>
                </div>
                <div className="px-4">
                  <p className="font-bold">Price: ${tool.price}</p>
                </div>
                <div className="flex items-center justify-between px-4">
                  <p className="font-bold">Min Order: ${tool.minQuantity}</p>
                  <p className="font-bold">
                    Available Quantity: ${tool.availableQuantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
