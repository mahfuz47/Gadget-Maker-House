import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";
import facebook from "../../images/facebook.png";
import google from "../../images/google.png";
import Loading from "../../Utilities/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user);

  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      toast.success("Login Success");
    }
    if (error) {
      toast.error(error?.message);
    }
  }, [navigate, token, user, error, from]);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className=" flex justify-around">
          <button onClick={() => signInWithGoogle()} className="social-button">
            <img
              src={google}
              alt="google-login"
              className="rounded-full h-10 w-10 cursor-pointer"
            />
          </button>
          <p className="text-5xl font-thin text-gray-300">||</p>
          <button className="social-button">
            <img
              src={facebook}
              alt="facebook-login"
              className="rounded-full h-10 w-10 cursor-pointer"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default SocialLogin;
