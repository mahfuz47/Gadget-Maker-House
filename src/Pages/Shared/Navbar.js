import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
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
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
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
    <div className="navbar bg-base-100 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold text-indigo-800"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl font-mono text-indigo-800 font-extrabold"
        >
          Gadget Maker House
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-bold text-indigo-800">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label
          tabIndex="1"
          htmlFor="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
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
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
