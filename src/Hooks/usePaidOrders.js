import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const usePaidOrders = () => {
  const [user] = useAuthState(auth);
  const [paidOrder, setPaidOrder] = useState([]);
  useEffect(() => {
    fetch("https://gadget-maker-house-server.onrender.com/paidOrders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPaidOrder(data));
  }, [user]);
  return [paidOrder, setPaidOrder];
};

export default usePaidOrders;
