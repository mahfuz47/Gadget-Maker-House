import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useProfileData = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    async function fetch() {
      const { data } = await axios.get(
        "https://gadget-maker-house-server.onrender.com/profile"
      );
      setProfile(data?.slice().reverse()[0]);
    }
    fetch();
  }, [user]);

  return [profile, setProfile];
};

export default useProfileData;
