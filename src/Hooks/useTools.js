import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://gadget-maker-house-server.onrender.com/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return [tools];
};

export default useTools;
