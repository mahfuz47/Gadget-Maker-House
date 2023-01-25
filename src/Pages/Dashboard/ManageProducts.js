import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useTools from "../../Hooks/useTools";
import Title from "../../Utilities/Title";

const ManageProducts = () => {
  const [user] = useAuthState(auth);
  const [tools, setTools] = useTools();
  const navigate = useNavigate();
  const handleDeleteOrders = (id) => {
    const proceedDelete = window.confirm("Are you sure to delete?");
    if (proceedDelete) {
      const url = `https://gadget-maker-house-server.onrender.com/tools/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = tools.filter((tool) => tool._id !== id);
          setTools(remaining);
        });
    }
  };
  return (
    <div>
      <div className="flex justify-between items-baseline">
        <Title title="Manage Products"></Title>
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
              <th className="text-center">No.</th>
              <th className="text-center">Tools</th>
              <th className="text-center">Name</th>
              <th className="text-center">Available Quantity</th>
              <th className="text-center">Price</th>
              <th className="text-center">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <img className="w-20" src={tool?.toolImage} alt="" />
                </td>
                <td className="text-center">{tool?.toolName}</td>

                <td className="text-center">{tool.availableQuantity}</td>
                <td className="text-center">{tool?.price}$</td>
                <td className="text-center">
                  <button
                    onClick={() => handleDeleteOrders(tool._id)}
                    className="btn btn-error btn-sm"
                  >
                    DELETE PRODUCT
                  </button>
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
