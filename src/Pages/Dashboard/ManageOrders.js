import React from "react";
import { useNavigate } from "react-router-dom";
import useOrders from "../../Hooks/useOrders";
import Title from "../../Utilities/Title";

const ManageOrders = () => {
  const [orders, setOrders] = useOrders();
  const navigate = useNavigate();

  const handleDeleteOrders = (id) => {
    const proceedDelete = window.confirm("Are you sure to delete?");
    if (proceedDelete) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };
  return (
    <div>
      <Title title={"Manage Order"}></Title>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Tool</th>
              <th>Name</th>
              <th>quantity</th>
              <th>Price</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((tool, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <img className="w-20" src={tool?.image} alt="" />
                </td>
                <td>{tool?.tool}</td>
                <td>
                  {tool.quantity
                    ? tool.quantity
                    : tool.order + "{default quantity}"}
                </td>
                <td>{tool?.price}$</td>
                <td>
                  <button
                    onClick={() => handleDeleteOrders(tool._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center py-8">
          <button
            onClick={() => navigate("/allTools")}
            className="btn btn-secondary btn-wide text-white font-bold"
          >
            ADD NEW ITEM
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
