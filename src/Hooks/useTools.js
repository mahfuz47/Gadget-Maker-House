import { useEffect, useState } from "react";

const useTools = () => {
  const [loading, setLoading] = useState(true);
  const [tools, setTools] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function dataFetch() {
      fetch("https://gadget-maker-house-server.onrender.com/tools")
        .then((res) => res.json())
        .then((data) => {
          setTools(data);
          setLoading(false);
        });
    }
    dataFetch();
  }, []);

  return [tools, loading, setTools];
};

export default useTools;
