import axios from "axios";
import { useEffect, useState } from "react";

const useProfileData = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/profile")
      .then((data) => setProfile(data.data[0]));
  }, []);

  return [profile, setProfile];
};

export default useProfileData;
