import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Utilities/Loading";
import Checkout from "./Checkout";

const stripePromise = loadStripe(
  "pk_test_51L2dm2De6gh5ingffWfYH3Ui11DgsEJyyUWW4H5yPypv1y04IKpxEU2fwNmtmtadX1cQt1kIhZ2l8pxgEhDrEBCL00xEVCQ04J"
);

const Payment = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(order._id);
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 border-2 border-solid">
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
          </div>
        </div>
        <div class="divider px-2 font-bold text-indigo-600">CARD INFO</div>

        <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
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
