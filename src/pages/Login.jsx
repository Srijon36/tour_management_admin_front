import React from "react";
import "../assets/custom.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <h1 className="title">TOUR</h1>
        <p className="subtitle">MANAGEMENT</p>

        <div className="login-box">
          <form>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
            </div>

            <a href="#" className="forgot">Forgot password?</a>

            <button type="submit" className="btn">Sign In</button>

            <button type="button" className="btn google">
              Sign in with Google
            </button>

            <button type="button" className="btn apple">
              Sign in with Apple
            </button>

            <p className="signup">
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
