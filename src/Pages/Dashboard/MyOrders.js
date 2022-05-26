import React from "react";
import { Link } from "react-router-dom";
import useOrders from "../../Hooks/useOrders";

const MyOrders = () => {
  const [orders] = useOrders();

  return (
    <div>
      <h2 className="text-lg font-bold">Total Order: {orders.length}</h2>
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
            {orders.map((tool, index) => (
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
                    <Link to={`/dashboard/payment/${tool._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {tool?.price && tool?.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">
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
