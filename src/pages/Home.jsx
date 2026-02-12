import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
   const active = location.pathname;  


  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">Midnight Safari</div>
        <ul className="menu">
          <Link to="/" style={{ textDecoration: 'none' , color: 'inherit' }}>
            <li className={`menu-item ${active === "/" ? "active" : ""}`}>
              🏠 Dashboard
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li className={`menu-item ${active === "/users" ? "active" : ""}`}>
              👤 Users
            </li>
          </Link>
         <Link to="/hotels"  style={{textDecoration: 'none'}}>
         <li className={`menu-item ${active === "/hotels" ? "active": ""}`}>
         🏨 Hotels</li>
         </Link> 
          <li className="menu-item">🎫 Tour Package</li>
          <li className="menu-item">📅 Booking</li>
          <li className="menu-item">💰 Payments</li>
          <li className="menu-item">👨‍👩‍👧‍👦 Team</li>
          <li className="menu-item">⚙️ Settings</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <div className="main-content">
        <div className="topbar">
          <input className="search" placeholder="Search or type command..." />
          <div className="topbar-right">
            <span className="icon">🔔</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon">🚌</div>
            <div className="stat-title">Active Tours</div>
            <div className="stat-value">6</div>
            <div className="stat-info">2 Delayed</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <div className="stat-title">Bookings</div>
            <div className="stat-value">132</div>
            <div className="stat-info">28 Completed</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👨‍💼</div>
            <div className="stat-title">Travel Agents</div>
            <div className="stat-value">8</div>
            <div className="stat-info">1 Inactive</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">😊</div>
            <div className="stat-title">Customer Satisfaction</div>
            <div className="stat-value">76%</div>
            <div className="stat-up">26% Increased</div>
          </div>
        </div>

        {/* Active Projects Table */}
        <div className="projects-section">
          <h2>Active Projects</h2>
          <div className="projects-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Progress</th>
                  <th>Status</th>
                  <th>Assigned</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Manali Package</td>
                  <td>
                    <div className="progress-container">
                      <div className="progress-bar" style={{ width: "75%" }}></div>
                      <span className="progress-text">75%</span>
                    </div>
                  </td>
                  <td><span className="status-badge status-on-track">On Track</span></td>
                  <td><span className="assigned-badge">RK</span></td>
                </tr>
                <tr>
                  <td>Spiti Valley</td>
                  <td>
                    <div className="progress-container">
                      <div className="progress-bar" style={{ width: "45%" }}></div>
                      <span className="progress-text">45%</span>
                    </div>
                  </td>
                  <td><span className="status-badge status-at-risk">At Risk</span></td>
                  <td><span className="assigned-badge">AA</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;