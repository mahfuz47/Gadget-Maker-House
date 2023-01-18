import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/allTools">Products</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        {user ? (
          <div className="flex justify-between items-center">
            <p className="bg-gray-100 rounded-xl p-2 font-bold text-sm text-graay-900 uppercase">
              {user.displayName}
            </p>
            <button className="font-bold" onClick={handleSignOut}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold text-indigo-700 bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center lg:navbar-start">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-indigo-600 font-bold text-2xl"
        >
          Gadget Maker House
        </Link>
      </div>
      <div className="navbar-end lg:flex hidden">
        <ul className="menu menu-horizontal px-1 text-indigo-600 font-bold">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
