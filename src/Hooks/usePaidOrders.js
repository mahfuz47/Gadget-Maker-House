import { useEffect, useState } from "react";

const usePaidOrders = () => {
  const [paidOrder, setPaidOrder] = useState([]);
  useEffect(() => {
    fetch("https://gadget-maker-house-server.onrender.com/paidOrders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPaidOrder(data));
  }, []);
  return [paidOrder, setPaidOrder];
};

export default usePaidOrders;
