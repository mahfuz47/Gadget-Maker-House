import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../../Hooks/useToken";
import Loading from "../../../Utilities/Loading";
import SocialLogin from "../../Shared/SocialLogin";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const [token] = useToken(user);
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      await signInWithEmailAndPassword(email, password).then(
        (userCredential) => {
          //  console.log(userCredential);
        }
      );
    } else {
      toast.error("Please fill all fields");
    }
  };
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
        <Loading />
      ) : (
        <div className="px-5 grid h-full font-poppins lg:w-5/12 w-full mx-auto my-6">
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
              <div className="text-left text-xs mb-6">
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
