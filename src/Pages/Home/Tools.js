import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import Loading from "../../Utilities/Loading";

const Tools = () => {
  const navigate = useNavigate();
  const navigateToPartsDetails = (id) => {
    navigate(`/tools/${id}`);
  };
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://gadget-maker-house-server.onrender.com/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setLoading(false);
      });
  }, [user]);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-10 lg:max-w-none">
            <h2 className="lg:text-3xl text-xl font-bold text-start mb-10">
              Highlight Gadgets
            </h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3">
              {tools.slice(0, 6).map((tool) => (
                <div
                  key={tool._id}
                  className="bg-white p-5 flex flex-col justify-between gap-2 rounded-md shadow-md"
                >
                  {/* Product Image */}
                  <img
                    src={tool.toolImage}
                    alt={tool.toolName}
                    className="w-full h-[200px] object-center object-cover rounded-md"
                    title={tool.toolName}
                  />
                  {/* Product Name */}
                  <a href="/tools/:id">
                    <h3 className="mt-6 text-lg font-bold text-slate-900">
                      {tool.toolName}
                    </h3>
                  </a>
                  {/* Product Description */}
                  <p>
                    <small>
                      {tool.description.length > 80
                        ? tool.description.slice(0, 70) + "..."
                        : ""}
                    </small>
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-green-600">
                      {tool.availableQuantity} In stock
                    </p>
                    <p className="font-bold text-3xl">${tool.price}</p>
                  </div>
                  <button
                    onClick={() => {
                      navigateToPartsDetails(tool._id);
                    }}
                    className="btn bg-indigo-600 hover:bg-indigo-800 w-full border-0 rounded font-bold uppercase text-white "
                  >
                    purchase
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center px-4">
            {" "}
            <Link to="/allTools">
              <button className="btn btn-secondary btn-outline flex justify-between">
                See all Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tools;
