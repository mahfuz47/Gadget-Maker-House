import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import facebook from "../../images/facebook.png";
import google from "../../images/google.png";
import Loading from "../../Utilities/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle().then((res) => {
      if (user) {
        toast.success("Login Success");
        navigate("/", { replace: true });
      } else {
        toast.error(error?.message);
      }
    });
  };

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className=" flex justify-around">
          <button onClick={() => handleGoogleLogin()} className="social-button">
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
