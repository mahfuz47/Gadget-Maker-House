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

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/tools/:id"
          element={
            <RequireAuth>
              <Parchase></Parchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
