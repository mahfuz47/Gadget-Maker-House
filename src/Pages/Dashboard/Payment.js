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
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {order.user}</p>
          <h2 className="card-title">Please Pay for {order.tool}</h2>
          <p>
            Your Email: <span className="text-orange-700">{order.email}</span>{" "}
            Will be notified when your order we shipped.
          </p>
          <p>Please pay: ${order.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <Checkout order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
