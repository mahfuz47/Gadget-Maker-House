import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import SocialLogin from "../../Shared/SocialLogin";

const SignupForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  // Creating User
  //
  //
  //
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      if (email && password) {
        await createUserWithEmailAndPassword(email, password).then(
          (userCredential) => {
            if (userCredential) {
              console.log(userCredential.user);
              toast.success("Account registered successfully");
            }
          }
        );
      } else {
        toast.error("Please fill all fields");
      }
      if (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Password does not match");
    }
  };

  return (
    <div className="px-5 grid h-full">
      <div className=" px-5 pb-10 rounded-xl shadow-lg bg-white w-full my-auto">
        <form onSubmit={handleSubmit} className="space-y-5 text-sm">
          <div className="form-group w-full">
            <label
              htmlFor="email"
              className="form-label inline-block mb-2 text-primary"
            >
              Email address
            </label>
            <input
              type="email"
              className="input-default"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
              autoComplete="email"
              placeholder="Type your email"
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="password"
              className="form-label inline-block mb-2 text-primary"
            >
              Password
            </label>
            <input
              type="text"
              className="input-default"
              id="password"
              placeholder="Type your password"
              autoComplete="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="password"
              className="form-label inline-block mb-2 text-primary"
            >
              Confirm Password
            </label>
            <input
              type="text"
              className="input-default"
              id="confirm-password"
              placeholder="confirm your password"
              autoComplete="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-control text-start">
            <label className="label flex justify-start cursor-pointer">
              <input
                type="checkbox"
                required
                className="checkbox checkbox-xs checkbox-primary rounded text-white transition-all duration-200 ease-in-out mr-1"
              />
              <span className="label-text text-sm">
                Accept Terms and Conditions
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="
      btn btn-primary btn-block rounded-lg text-white"
          >
            Sign in
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Login
            </Link>
          </p>
        </form>
        <div className="divider text-xs text-gray-600">OR</div>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignupForm;
