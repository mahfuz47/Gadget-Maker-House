import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../Utilities/Title";

const Parchase = () => {
  const { id } = useParams();
  const [toolDetail, setToolDetail] = useState({});
  const { orderQuantity } = toolDetail;

  useEffect(() => {
    fetch(`http://localhost:5000/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setToolDetail(data));
  }, [id]);
  const [orderData, setOrderData] = useState(orderQuantity);
  console.log(toolDetail);

  const minusQuantity = (quantity) => {
    let totalQuantity = parseInt(quantity) - 10;
    setOrderData(totalQuantity);
  };
  const plusQuantity = (quantity) => {
    let totalQuantity = parseInt(quantity) + 10;
    setOrderData(totalQuantity);
  };

  return (
    <div>
      <Title title={"Parchase"}></Title>
      <div className="grid grid-cols-2 xs:inline items-center space-x-4 gap-y-4">
        <div className="py-5 sm:w-9/12">
          <img
            className="w-full rounded-xl"
            src={toolDetail?.toolImage}
            alt={toolDetail?.toolName}
          />
          <div className="flex justify-between items-center px-2">
            <div className="flex justify-between space-x-2 items-center px-2">
              <div>
                <p className="text-2xl font-bold">Order Quantity:</p>
              </div>
              <button
                onClick={() => minusQuantity()}
                className="btn btn-square btn-sm btn-outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <p className="font-bold text-black text-2xl">{orderData}</p>
              <button
                onClick={() => plusQuantity()}
                className="btn btn-square btn-sm btn-outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div>
              <button className="btn bg-indigo-600 rounded-xl px-3 py-1 font-bold uppercase hover:bg-indigo-800 text-white ">
                Place Order
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-xl font-bold leading-6 font-mono text-gray-900">
                {toolDetail?.toolName}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Details and Parchase functionalities.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Torque</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {toolDetail?.Torque}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Cylinders
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {toolDetail?.cylinders}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Price</dt>
                  <dd className="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <p>${toolDetail?.price}</p>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">
                    Description
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {toolDetail?.description}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">
                    Minimum Order Quantity
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-bold">
                    {toolDetail?.minQuantity}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">
                    Avaliable Quantity
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {toolDetail?.availableQuantity}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parchase;
