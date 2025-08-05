import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // adjust path if needed
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!email || !password || (!isLogin && !name)) {
      alert("Please fill all fields");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      if (isLogin) {
        // LOGIN
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/home"); // or navigate to your protected page
      } else {
        // REGISTER
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registration successful!");
        setIsLogin(true); // switch to login view
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="auth-box p-4 shadow rounded"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="text-center mb-3">
          <button
            className={`btn btn-sm me-2 ${isLogin ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`btn btn-sm ${!isLogin ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {!isLogin && (
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}

          <button type="submit" className="btn btn-success w-100">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
