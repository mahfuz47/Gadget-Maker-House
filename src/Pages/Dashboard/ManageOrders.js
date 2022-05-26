import React from "react";
import { useNavigate } from "react-router-dom";
import usePaidOrders from "../../Hooks/usePaidOrders";
import Title from "../../Utilities/Title";

const ManageOrders = () => {
  const navigate = useNavigate();
  const [paidOrder, setPaidOrder] = usePaidOrders();
  const handleDeleteOrders = (id) => {
    const proceedDelete = window.confirm("Are you sure to delete?");
    if (proceedDelete) {
      const url = `http://localhost:5000/paidOrders/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = paidOrder.filter((order) => order._id !== id);
          setPaidOrder(remaining);
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
              <th>Payment</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {paidOrder.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <img className="w-20" src={order?.image} alt="" />
                </td>
                <td>{order?.tool}</td>
                <td>{order.quantity ? order.quantity : order.order}</td>
                <td>
                  {order?.paid && (
                    <p className="text-green-400 pl-2 font-extrabold rounded-xl">
                      PAID
                    </p>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteOrders(order._id)}
                    className="btn btn-error btn-sm"
                  >
                    Cancel Order
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
