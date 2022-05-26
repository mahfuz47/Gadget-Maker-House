import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Title from "../../Utilities/Title";
// import auth from "../../firebase.init";
// import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const navigate = useNavigate();
  //   const [user] = useAuthState(auth);
  //   const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <Title title="Dashboard"></Title>
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <button
          onClick={() => navigate("/dashboard")}
          className="rounded-xl btn-ghost text-purple-600 font-extrabold uppercase py-3 pr-4 text-3xl"
        >
          Dashboard
        </button>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/myOrders">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/manageOrders">Manage Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addReview">Add Review</Link>
          </li>
          <>
            <li>
              <Link to="/dashboard/makeAdmin">Make Admin</Link>
            </li>
            <li>
              <Link to="/dashboard/manageAdmin">Manage Admin</Link>
            </li>
            <li>
              <Link to="/dashboard/addProducts">Add Products</Link>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
