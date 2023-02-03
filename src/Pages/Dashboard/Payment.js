import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Utilities/Loading";
import Title from "../../Utilities/Title";
import Checkout from "./Checkout";

const stripePromise = loadStripe(
  "pk_test_51L2dm2De6gh5ingffWfYH3Ui11DgsEJyyUWW4H5yPypv1y04IKpxEU2fwNmtmtadX1cQt1kIhZ2l8pxgEhDrEBCL00xEVCQ04J"
);

const Payment = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(`https://gadget-maker-house-server.onrender.com/orders/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-3 my-3">
      <Title title="Payment"></Title>
      <div>
        <div className="card lg:w-5/12 mx-auto w-full bg-base-100 shadow-xl p-3">
          <div className="card-body">
            <p className="text-success font-bold">Hello, {order.user}</p>
            <h2 className="card-title font-bold">Payment For:</h2>
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              {order.tool}
            </h2>
            <p className="text-gray-900 font-semibold">
              Your Email: <span className="text-orange-700">{order.email}</span>{" "}
              will be notified when your order get shipped.
            </p>
            <p className="font-bold">
              Amount: <span className="text-indigo-500">${order.price}</span>
            </p>
            <p className="text-sm font-bold">
              You can use this fake card number: <br />
              <span className="font-semibold text-indigo-600 text-xs">
                5555555555554444 - 2325 - 567 - 23455
              </span>
            </p>
          </div>
        </div>
        <div className="divider px-2 font-bold text-indigo-600">CARD INFO</div>

        <div className="card lg:w-5/12 mx-auto w-full bg-base-100 shadow-xl p-3">
          <div className="card-body space-y-2">
            <Elements stripe={stripePromise}>
              <Checkout order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
