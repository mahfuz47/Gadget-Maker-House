import React, { useEffect, useState } from "react";

const DealershipQuery = () => {
  const [dealers, setDealers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/info`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDealers(data));
  }, []);
  return (
    <div>
      <div className="flex justify-between items-baseline">
        <h2 className="text-lg font-bold">Total Query: {dealers.length}</h2>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-2">
        {dealers.map((dealer) => (
          <div key={dealer._id} class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <h2 class="card-title text-center">{dealer?.name}</h2>
              <p>{dealer.query}</p>
              <div class="card-actions justify-center">{dealer.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealershipQuery;
