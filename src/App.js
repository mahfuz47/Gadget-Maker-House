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
import ManageAdmin from "./Pages/Dashboard/ManageAdmin";
import AddReview from "./Pages/Dashboard/AddReview";
import AddProducts from "./Pages/Dashboard/AddProducts";
import Payment from "./Pages/Dashboard/Payment";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="tools/:id"
          element={
            <RequireAuth>
              <Parchase></Parchase>
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
            element={<ManageOrders></ManageOrders>}
          ></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route
            path="manageAdmin"
            element={<ManageAdmin></ManageAdmin>}
          ></Route>
          <Route
            path="addProducts"
            element={<AddProducts></AddProducts>}
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
