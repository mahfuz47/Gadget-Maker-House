import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Title from "../../Utilities/Title";

const DealershipQuery = () => {
  const [user] = useAuthState(auth);
  const [dealers, setDealers] = useState([]);
  useEffect(() => {
    fetch(`https://gadget-maker-house-server.onrender.com/info`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDealers(data));
  }, [user]);
  return (
    <div>
      <div className="flex justify-between items-baseline">
        <Title title="Queries"></Title>
        <h2 className="text-lg font-bold">Total Query: {dealers.length}</h2>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-2">
        {dealers.map((dealer) => (
          <div key={dealer._id} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center">{dealer?.name}</h2>
              <p>{dealer.query}</p>
              <div className="card-actions justify-center">{dealer.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealershipQuery;
