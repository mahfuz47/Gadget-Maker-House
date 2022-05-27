import { useEffect, useState } from "react";

const usePaidOrders = () => {
  const [paidOrder, setPaidOrder] = useState([]);
  useEffect(() => {
    fetch("https://polar-refuge-25611.herokuapp.com/paidOrders", {
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
