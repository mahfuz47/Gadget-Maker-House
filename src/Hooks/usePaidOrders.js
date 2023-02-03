import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const usePaidOrders = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [paidOrder, setPaidOrder] = useState([]);
  useEffect(() => {
    fetch("https://gadget-maker-house-server.onrender.com/paidOrders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPaidOrder(data);
        setLoading(false);
      });
  }, [user]);
  return [paidOrder, setPaidOrder, loading];
};

export default usePaidOrders;
