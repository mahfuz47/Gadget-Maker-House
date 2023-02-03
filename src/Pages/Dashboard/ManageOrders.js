import React from "react";
import { useNavigate } from "react-router-dom";
import usePaidOrders from "../../Hooks/usePaidOrders";
import Loading from "../../Utilities/Loading";
import Title from "../../Utilities/Title";

const ManageOrders = () => {
  const navigate = useNavigate();
  const [paidOrder, setPaidOrder, loading] = usePaidOrders();
  const handleDeleteOrders = (id) => {
    const proceedDelete = window.confirm("Are you sure to delete?");
    if (proceedDelete) {
      const url = `https://gadget-maker-house-server.onrender.com/paidOrders/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = paidOrder.filter((order) => order._id !== id);
          setPaidOrder(remaining);
        });
    }
  };
  return (
    <div>
      <Title title={"Manage Order"}></Title>

      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="overflow-x-auto border-x rounded-lg">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-center">No.</th>
                <th className="text-center">Tool</th>
                <th className="text-center">Name</th>
                <th className="text-center">quantity</th>
                <th className="text-center">Payment</th>
                <th className="text-center">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {paidOrder.map((order, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td className="text-center">
                    <img className="w-20" src={order?.image} alt="" />
                  </td>
                  <td className="text-center">{order?.tool}</td>
                  <td className="text-center">
                    {order.quantity ? order.quantity : order.order}
                  </td>
                  <td className="text-center">
                    {order?.paid && (
                      <p className="text-green-400 pl-2 font-extrabold rounded-xl">
                        PAID
                      </p>
                    )}
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDeleteOrders(order._id)}
                      className="btn btn-error btn-sm"
                    >
                      Cancel Order And Refund
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
      )}
    </div>
  );
};

export default ManageOrders;
