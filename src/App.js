import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Parchase from "./Pages/Parchase/Parchase";
import Registration from "./Pages/Authentication/Registration/Registration";
import Login from "./Pages/Authentication/Login/Login";
import Footer from "./Pages/Shared/Footer";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import AddReview from "./Pages/Dashboard/AddReview";
import AddProducts from "./Pages/Dashboard/AddProducts";
import Payment from "./Pages/Dashboard/Payment";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import AllTools from "./Pages/Home/AllTools";
import RequireAdmin from "./Pages/Authentication/RequireAdmin/RequireAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import DealershipQuery from "./Pages/Dashboard/DealershipQuery";
import Blogs from "./Pages/Blogs/Blogs";
import MyPortfolio from "./Pages/Portfolio/MyPortfolio";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="updateProfile/:id"
          element={<UpdateProfile></UpdateProfile>}
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route
          path="tools/:id"
          element={
            <RequireAuth>
              <Parchase></Parchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="allTools"
          element={
            <RequireAuth>
              <AllTools></AllTools>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProducts"
            element={
              <RequireAdmin>
                <AddProducts></AddProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="dealersQuery"
            element={
              <RequireAdmin>
                <DealershipQuery></DealershipQuery>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
