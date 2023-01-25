import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useTools = () => {
  const [user] = useAuthState(auth);
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://gadget-maker-house-server.onrender.com/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [user]);

  return [tools];
};

export default useTools;
