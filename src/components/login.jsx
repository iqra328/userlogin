import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./login.css";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/dashboard"); // Dashboard page pe redirect
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
   
  <div className="login-container">
    <div className="login-card">
      <h2>Dezi Flight ✈️</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <div className="login-footer">
  New user?{" "}
  <button
    type="button"
    className="link-btn"
    onClick={() => navigate("/signup")}
  >
    Signup
  </button>
</div>


    </div>
  </div>
);

  
}

export default Login;
