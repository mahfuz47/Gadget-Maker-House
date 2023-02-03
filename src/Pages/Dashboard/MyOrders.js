import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useOrders from "../../Hooks/useOrders";
import Title from "../../Utilities/Title";

const MyOrders = () => {
  const [orders, setOrders] = useOrders();
  const navigate = useNavigate();
  const handleDeleteOrders = (id) => {
    const proceedDelete = window.confirm("Are you sure to delete?");
    if (proceedDelete) {
      const url = `https://gadget-maker-house-server.onrender.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };
  return (
    <div>
      <Title title="My Orders"></Title>
      <div className="flex justify-between items-center p-3">
        <h2 className="text-lg font-bold">Total Order: {orders.length}</h2>
        <button
          onClick={() => navigate("/allTools")}
          className="btn btn-outline btn-secondary btn-sm hover:text-white"
        >
          order again
        </button>
      </div>
      <div className="overflow-x-auto border-x rounded-lg">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-center">No.</th>
              <th className="text-center">Name</th>
              <th className="text-center">Image</th>
              <th className="text-center">quantity</th>
              <th className="text-center">Price</th>
              <th className="text-center">Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((tool, index) => (
              <tr className="text-sm" key={index}>
                <th className="text-center ">{index + 1}</th>
                <td className="text-center">{tool?.tool}</td>
                <td className="text-center">
                  <img className="w-20" src={tool?.image} alt="" />
                </td>
                <td className="text-center">
                  {tool.quantity ? tool.quantity : tool.order}
                </td>
                <td className="text-center">{tool?.price}$</td>
                <td className="text-center">
                  {tool?.price && !tool?.paid && (
                    <div className="flex justify-center items-center">
                      <div className="flex items-center justify-start space-x-3">
                        <Link to={`/dashboard/payment/${tool._id}`}>
                          <button className="btn btn-sm btn-secondary font-bold text-white">
                            pay
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDeleteOrders(tool._id)}
                          className="btn btn-error btn-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                  {tool?.price && tool?.paid && (
                    <div className="bg-gray-100 rounded-xl px-2">
                      <p className="text-green-500 font-bold rounded-xl text-lg flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Paid
                      </p>
                      <p className="text-xs">
                        <span className="font-bold text-gray-900">
                          Transaction ID
                        </span>
                        :{" "}
                        <span className="text-green-600 ">
                          {tool?.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
