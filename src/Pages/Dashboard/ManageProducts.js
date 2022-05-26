import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useTools from "../../Hooks/useTools";

const ManageProducts = () => {
  const [tools, setTools] = useTools();
  const navigate = useNavigate();
  const handleDeleteOrders = (id) => {
    const proceedDelete = window.confirm("Are you sure to delete?");
    if (proceedDelete) {
      const url = `http://localhost:5000/tools/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = tools.filter((tool) => tool._id !== id);
          setTools(remaining);
        });
    }
  };
  return (
    <div>
      <div className="flex justify-between items-baseline">
        <h2 className="text-lg font-bold">Total Order: {tools.length}</h2>
        <button
          onClick={() => navigate("/allTools")}
          className="btn btn-outline btn-secondary btn-wide btn-sm text-white font-bold"
        >
          order again
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>quantity</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{tool?.tool}</td>
                <td>
                  <img className="w-20" src={tool?.image} alt="" />
                </td>
                <td>{tool.quantity ? tool.quantity : tool.order}</td>
                <td>{tool?.price}$</td>
                <td>
                  {tool?.price && !tool?.paid && (
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
                      <p>
                        <span className="font-bold text-gray-900">
                          Transaction ID
                        </span>
                        :{" "}
                        <span className="text-green-600 font-bold">
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

export default ManageProducts;
