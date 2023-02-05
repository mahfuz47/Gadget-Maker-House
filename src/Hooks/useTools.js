import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useTools = () => {
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://gadget-maker-house-server.onrender.com/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setLoading(false);
      });
  }, [user]);

  return [tools, loading, setTools];
};

export default useTools;
