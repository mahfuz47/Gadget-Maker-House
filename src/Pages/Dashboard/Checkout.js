import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Loading from "../Shared/Loading";

const CheckoutForm = ({ order }) => {
  const { _id, price, user, email } = order;
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://gadget-maker-house-server.onrender.com/create-payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${user?.accessToken}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price, user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");

    //
    //
    // confirm card payment
    //
    //
    //
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);

      setSuccess("Congrats! Your payment is completed.");

      //store payment on database
      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://gadget-maker-house-server.onrender.com/orders/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${user?.accessToken}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <>
          <div className="text-green-500">
            <p>{success} </p>
            <p>
              Your transaction Id:{" "}
              <span className="text-orange-500 font-bold">{transactionId}</span>{" "}
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-sm btn-outline btn-success"
          >
            go to home page
          </button>
        </>
      )}
    </>
  );
};

export default CheckoutForm;
