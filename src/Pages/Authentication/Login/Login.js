import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import SocialLogin from "../../Shared/SocialLogin";

const Login = () => {
  const [type, setType] = React.useState("password");
  const [token, setToken] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      await signInWithEmailAndPassword(email, password).then(
        (userCredential) => {
          if (userCredential) {
            toast.success("Login successful");
            navigate(from, { replace: true });
          } else {
            toast.error(error.message);
          }
        }
      );
    } else {
      toast.error("Please fill all fields");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  const showHide = async (e) => {
    e.preventDefault();
    setType(type === "text" ? "password" : "text");
  };

  useEffect(() => {
    async function checkType() {
      if (type === "text") {
        setTimeout(() => {
          setType("password");
        }, "3000");
      }
    }
    checkType();
  }, [type]);

  return (
    <div className="px-5 grid h-full font-poppins w-5/12 mx-auto">
      <div className=" px-5 pb-10 rounded-xl shadow-lg bg-white w-full my-auto">
        <h1 className="text-3xl font-bold text-indigo-500 text-center my-5">
          Login
        </h1>
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
              autoComplete="email"
              placeholder="Type your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="password"
              className="form-label inline-block mb-2 text-primary"
            >
              Password
            </label>
            <input
              type={type}
              className="input-default"
              id="password"
              placeholder="Type your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center text-xs mb-6">
            <button onClick={showHide} className="flex">
              {type === "text" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
              <span className="ml-1"> Show password</span>
            </button>
            <a
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="
      btn btn-primary btn-block rounded-lg text-white"
          >
            Sign in
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Register
            </Link>
          </p>
        </form>
        <div className="divider text-xs text-gray-600">OR</div>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
