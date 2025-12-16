import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
