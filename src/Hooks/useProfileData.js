import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useProfileData = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const { data } = await axios.get(
        "https://gadget-maker-house-server.onrender.com/profile"
      );
      setProfile(data?.slice().reverse()[0]);
      setLoading(false);
    }
    fetch();
    setLoading(false);
  }, [user]);

  return [profile, setProfile, loading];
};

export default useProfileData;
