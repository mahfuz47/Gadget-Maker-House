import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Utilities/Loading";
import Title from "../../Utilities/Title";

const Parchase = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const [toolDetail, setToolDetail] = useState({});
  const { _id, toolName, toolImage, price, orderQuantity, availableQuantity } =
    toolDetail;
  // console.log(toolDetail);

  useEffect(() => {
    fetch(`https://gadget-maker-house-server.onrender.com/tools/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setToolDetail(data));
  }, [id, user]);

  const [quantity, setQuantity] = useState(toolDetail?.minQuantity);
  useEffect(() => {
    if (quantity !== toolDetail?.minQuantity) {
      setQuantity(toolDetail?.minQuantity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toolDetail]);
  const navigate = useNavigate();
  const goToMyOrders = () => {
    navigate("/dashboard/myOrders");
  };

  const handleOrder = (event) => {
    let totalPrice = price * orderQuantity;
    const order = {
      id: _id,
      user: user.displayName,
      email: user.email,
      tool: toolName,
      price: totalPrice,
      image: toolImage,
      quantity: quantity,
      order: orderQuantity,
    };
    fetch(`https://gadget-maker-house-server.onrender.com/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("order places placed");
        } else {
          toast.error("You can order only one time for every Product");
        }
      });
  };

  const minusQuantity = (q) => {
    if (q > orderQuantity) {
      setQuantity(q - 1);
    } else {
      setQuantity(orderQuantity);
    }
  };
  const plusQuantity = (q) => {
    if (q < availableQuantity) {
      setQuantity(q + 1);
    } else {
      setQuantity(availableQuantity);
    }
  };

  const handleQuantity = (e) => {
    let value = parseInt(e.target.value);
    if (e.target.value === "" || e.target.value === "0") {
      value = orderQuantity;
    }
    if (value < orderQuantity) {
      value = orderQuantity;
    }
    if (value > availableQuantity) {
      value = availableQuantity;
    }
    setQuantity(value);
    // if (value < orderQuantity) {
    //   setQuantity(orderQuantity);
    // } else {
    //   setQuantity(value);
    // }
    // if (value > availableQuantity) {
    //   setQuantity(availableQuantity);
    // } else {
    //   setQuantity(value);
    // }
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Title title={"Parchase"}></Title>
      <div className="grid grid-cols-2 xs:inline items-center space-x-4 gap-y-4">
        <div className="py-5 sm:w-9/12">
          <img
            className="w-full rounded-xl"
            src={toolDetail?.toolImage}
            alt={toolDetail?.toolName}
          />
          <div className="flex justify-between items-center px-2">
            <div className="flex justify-between space-x-2 items-center px-2">
              <div>
                <p className="text-2xl font-bold">Order Quantity:</p>
              </div>
              <button
                onClick={() => minusQuantity(quantity)}
                className="btn btn-square btn-sm btn-outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <input
                className="w-12 h-10"
                type="number"
                name=""
                id=""
                onChange={handleQuantity}
                value={quantity ? quantity : toolDetail?.minQuantity}
              />
              <button
                onClick={() => plusQuantity(quantity)}
                className="btn btn-square btn-sm btn-outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div>
              <button
                onClick={handleOrder}
                className="btn bg-indigo-600 rounded-xl px-3 py-1 font-bold uppercase hover:bg-indigo-800 text-white "
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold leading-6 font-mono text-gray-900">
                  {toolDetail?.toolName}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Details and Parchase functionalities.
                </p>
              </div>
              <button
                onClick={goToMyOrders}
                className="btn btn-outline btn-secondary btn-sm uppercase"
              >
                my orders
              </button>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">User</dt>
                  <dd className="mt-1 text-xl uppercase font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {user?.displayName}
                  </dd>
                </div>
                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {user?.email}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Price</dt>
                  <dd className="mt-1 font-bold text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <p>${toolDetail?.price}</p>
                  </dd>
                </div>
                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">
                    Description
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {toolDetail?.description}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">
                    Minimum Order Quantity
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-bold">
                    {toolDetail?.minQuantity}
                  </dd>
                </div>
                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">
                    Avaliable Quantity
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {toolDetail.availableQuantity}
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
