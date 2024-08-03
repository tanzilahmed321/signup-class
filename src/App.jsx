import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Dashbord" element={<Dashboard />} />
    </Routes>
    </>
  );
};

export default App;