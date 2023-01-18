import axios from "axios";
import { useEffect, useState } from "react";

const useProfileData = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios
      .get("https://gadget-maker-house-server.onrender.com/profile")
      .then((data) => setProfile(data.data[0]));
  }, []);

  return [profile, setProfile];
};

export default useProfileData;
