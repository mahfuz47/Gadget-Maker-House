import React from "react";
import facebook from "../../images/facebook.png";
import google from "../../images/google.png";

const SocialLogin = () => {
  return (
    <div className=" flex justify-around">
      <button className="social-button">
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
  );
};

export default SocialLogin;
