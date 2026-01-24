import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router";
import useAxiosSecures from "../../../hook/useAxiosSecures";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { parcelId } = useParams();

  const axiosSecure = useAxiosSecures();

  const { isPending, data: parcelInfo = {} } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isPending) {
    return "...loadingg";
  }

  console.log(parcelInfo);

  console.log(parcelId);

  const amount = parcelInfo.deliveryCost;

  const amountInCents = amount * 100;

  console.log(amountInCents);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("payment ", paymentMethod);
    }

    // step -2 create payment intent
    const res = await axiosSecure.post("/create-payment-intent", {
      amountInCents,
      parcelId,
    });

    const clientSecret = res.data.clientSecret;

const result = await stripe.confirmCardPayment(clientSecret, {
  payment_method: {
    card: elements.getElement(CardElement),
    billing_details: {
      name: 'Rabby',
    },
  },
});

    // 3️⃣ handle result
    if (result.error) {
      console.log("Payment error:", result.error.message);
    } else {
      console.log("Payment success:", result.paymentIntent);
    }
    console.log(result);
  };

  // CardElement এর styling
  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
      },
    },
    placeholder: "Enter your card details",
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="border p-3 rounded mb-4">
          <CardElement options={cardElementOptions}></CardElement>
        </div>
        <button
          type="submit"
          className="btn btn-success w-full"
          disabled={!stripe}
        >
          Pay ৳{amount}
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}
      <div className="mt-4 p-3 bg-blue-100 rounded text-sm">
        <p className="font-semibold mb-2">Test Card Numbers:</p>
        <p>✅ 4242 4242 4242 4242 (Success)</p>
      </div>
    </div>
  );
};

export default PaymentForm;
