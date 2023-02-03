import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../../Utilities/Loading";
import Title from "../../Utilities/Title";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if (adminLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="drawer drawer-mobile">
      <Title title="Dashboard"></Title>
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="dashboard-sidebar"
          onClick={() => navigate("/dashboard")}
          className="btn rounded-xl btn-ghost text-purple-600 font-extrabold uppercase lg:text-3xl text-xl ml-4"
        >
          Dashboard
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 space-y-2 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Profile</Link>
          </li>
          {user && !admin && (
            <>
              <li>
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addReview">Add Review</Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link to="/dashboard/manageOrders">Manage Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/makeAdmin">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/addProducts">Add Products</Link>
              </li>
              <li>
                <Link to="/dashboard/manageProducts">Manage Products</Link>
              </li>
              <li>
                <Link to="/dashboard/dealersQuery">Dealers Query</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
