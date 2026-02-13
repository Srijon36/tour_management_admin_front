import React from "react";
import "../assets/custom.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="content-wrapper">

        {/* LEFT SIDE - HERO TEXT */}
        <div className="hero-text">
          <h4 className="small-title">TRAVEL</h4>
          <h1 className="main-title">
            EXPLORE <br /> HORIZONS
          </h1>
          <p className="description">
            Where Your Dream Destinations Become Reality.
          </p>
          <p className="sub-description">
            Embark on a journey where every corner of the world is within your reach.
          </p>
        </div>

        {/* RIGHT SIDE - LOGIN BOX */}
        <div className="login-box">
          <div className="brand-header">
            <h1 className="title">TOUR</h1>
            <p className="subtitle">MANAGEMENT</p>
          </div>

          <form>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
            </div>

            <a href="#" className="forgot">
              Forgot password?
            </a>

            <button type="submit" className="btn primary">
              Sign In
            </button>

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
