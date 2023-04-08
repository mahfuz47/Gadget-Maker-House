import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Utilities/Loading";

const AllTools = () => {
  const [loading, setLoading] = useState(false);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function dataFetch() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://gadget-maker-house-server.onrender.com/tools"
        );
        setTools(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    dataFetch();
  }, []);
  const navigate = useNavigate();
  const navigateToPartsDetails = (id) => {
    navigate(`/tools/${id}`);
  };
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-10 lg:py-10 lg:max-w-none">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center my-5 font-serif">
            All Products
          </h2>
          {loading ? (
            <Loading></Loading>
          ) : (
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 gap-y-8">
              {tools.map((tool) => (
                <div
                  key={tool?._id}
                  className="group relative bg-white p-3 rounded-lg"
                >
                  <div className="relative w-full h-full shadow-lg bg-white rounded-lg overflow-hidden group-hover:scale-105 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={tool?.toolImage}
                      alt={tool?.toolName}
                      className="w-full h-full object-center object-cover"
                      title={tool?.toolName}
                    />
                  </div>
                  <div className="flex items-center justify-between lg:px-4 px-1">
                    <h3 className="mt-6 lg:text-xl text-lg font-bold font-sans text-slate-900">
                      <Link to={`/tools/${tool._id}`}>{tool?.toolName}</Link>
                    </h3>
                    <div>
                      <button
                        onClick={() => {
                          navigateToPartsDetails(tool?._id);
                        }}
                        className="btn bg-indigo-600 text-white px-3 py-1 font-bold mt-6 uppercase hover:bg-indigo-800 btn-sm rounded border-0"
                      >
                        purchase
                      </button>
                    </div>
                  </div>
                  <div className="lg:px-4 px-1">
                    <p>
                      <small className="lg:text-sm text-xs">
                        {tool?.description.length > 80
                          ? tool?.description.slice(0, 100) + "......"
                          : ""}
                      </small>
                    </p>
                  </div>
                  <div className="lg:px-4 px-1">
                    <p className="font-bold lg:text-sm text-xs">
                      Price: ${tool?.price}
                    </p>
                  </div>
                  <div className="flex items-center justify-between lg:px-4 px-1 font-bold lg:text-sm text-xs">
                    <p className="font-bold">Min Order: ${tool?.minQuantity}</p>
                    <p className="font-bold">
                      Available Quantity: ${tool?.availableQuantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllTools;
