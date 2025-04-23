import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up:", name, email, password);
    // Add your API logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create an Account</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <label className="signup-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="signup-input"
            placeholder="John Doe"
          />

          <label className="signup-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="signup-input"
            placeholder="you@example.com"
          />

          <label className="signup-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="signup-input"
            placeholder="••••••••"
          />

          <button type="submit" className="signup-button">Signup</button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <a href="/login" className="login-link">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
