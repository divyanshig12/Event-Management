import React, { useState } from "react";
import "./Login.css"; // Importing the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in as:", role, email, password);
    // Add API call here
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login to EventZen</h2>

        <form onSubmit={handleLogin}>
          <table className="login-table">
            <tbody>
              {/* Email */}
              <tr>
                <td className="login-label">Email:</td>
                <td className="login-input-cell">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="login-input"
                  />
                </td>
              </tr>

              {/* Password */}
              <tr>
                <td className="login-label">Password:</td>
                <td className="login-input-cell">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="login-input"
                  />
                </td>
              </tr>

              {/* Role */}
              <tr>
                <td className="login-label">Role:</td>
                <td className="login-input-cell">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="login-input"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>

              {/* Button */}
              <tr>
                <td></td>
                <td className="login-input-cell">
                  <button type="submit" className="login-button">
                    Login
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        {/* Signup */}
        <p className="signup-text">
          Don’t have an account?{" "}
          <a href="/signup" className="signup-link">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
