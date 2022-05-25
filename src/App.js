import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";

import Parchase from "./Pages/Parchase/Parchase";
import Registration from "./Pages/Authentication/Registration/Registration";
import Login from "./Pages/Authentication/Login/Login";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/tools/:id" element={<Parchase></Parchase>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
