import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../../Utilities/Loading";
import SocialLogin from "../../Shared/SocialLogin";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [navigate, user]);

  let from = location.state?.from?.pathname || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      await signInWithEmailAndPassword(email, password).then(
        (userCredential) => {
          if (userCredential) {
            toast.success("Login successful");
            console.log(userCredential);
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                  type="password"
                  className="input-default"
                  id="password"
                  placeholder="Type your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center text-xs mb-6">
                <button className="flex">
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
                  to="/registration"
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
      )}
    </>
  );
};

export default Login;
