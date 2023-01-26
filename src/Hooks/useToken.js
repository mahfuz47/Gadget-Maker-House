import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  console.log(user);
  useEffect(() => {
    if (user) {
      const email = user?.user?.email;
      const currentUser = { email: email };
      if (email) {
        fetch(`https://gadget-maker-house-server.onrender.com/users/${email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            const accessToken = data.accessToken;
            localStorage.setItem("accessToken", accessToken);
            setToken(accessToken);
          });
      }
    }
  }, [user]);
  return [token];
};
export default useToken;
