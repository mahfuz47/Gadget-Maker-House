import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Utilities/Loading";
import Title from "../Utilities/Title";

const Parchase = () => {
  const { id } = useParams();
  const [toolDetail, setToolDetail] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/tools/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToolDetail(data));
  }, [id]);

  if (!toolDetail) {
    return <Loading></Loading>;
  }
  const { minQuantity, availableQuantity } = toolDetail;
  console.log(minQuantity, availableQuantity);
  return (
    <div>
      <Title title={"Parchase"}></Title>
      <div className="grid grid-cols-2 items-center space-x-4 gap-y-4">
        <div className="py-5">
          <img
            className="w-full rounded-xl"
            src={toolDetail?.toolImage}
            alt={toolDetail?.toolName}
          />
          <div className="flex justify-between items-center px-2">
            <p className="text-sm font-bold text-gray-500">
              Order Quantity: {minQuantity}
            </p>
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
